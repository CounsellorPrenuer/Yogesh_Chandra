import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'xhb8i5d7',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: 'skPmbaFXuObZUhfDX7Xf5TGluwL3vbBNz796ACr5xOjb3UGjcoTW6UQOrEHiDCghuE97LuE7C9Dr5jCNjYApNGm8ix5WwAPrXr5A2FvnlHYPHqASUzNnry38rYtBinIcGvoJgpWIq8RPMOXJJNUeyTVIIRgr7Vjrldo0OEH5hnHuC4lpoxlv',
  useCdn: false
})

async function uploadImage(filePath) {
  if (fs.existsSync(filePath)) {
    const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
      filename: path.basename(filePath)
    })
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      }
    }
  }
  return null
}

async function populate() {
  console.log('Populating data...')
  
  // Founder Info
  let photoAsset = await uploadImage(path.resolve('../founder.JPG'))
  
  const founder = {
    _type: 'founderInfo',
    name: 'Dr. Yogesh Chandra',
    bio: 'Career counseling service with certification name and all professional degrees.',
    ...(photoAsset && { photo: photoAsset })
  }
  
  await client.create(founder)

  const packages = [
    {
      _type: 'pricingPackage',
      category: '8-9 STUDENTS',
      tier: 'STANDARD',
      title: 'Discover',
      price: 5500,
      features: [
        { name: 'Psychometric assessment to measure your interests', included: true },
        { name: '1 career counselling session with Mentoria\'s expert career coaches', included: true },
        { name: 'Lifetime access to Knowledge Gateway', included: true },
        { name: 'Invites to live webinars by Industry experts', included: true },
        { name: 'Customised reports after each session with education pathways', included: false },
        { name: 'Guidance on studying abroad', included: false },
        { name: 'CV building during internships/graduation', included: false },
      ]
    },
    {
      _type: 'pricingPackage',
      category: '8-9 STUDENTS',
      tier: 'PREMIUM',
      title: 'Discover plus+',
      price: 15000,
      features: [
        { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { name: '8 career counselling sessions (1 every year) with Mentoria\'s expert career coaches until graduation', included: true },
        { name: 'Lifetime access to Knowledge Gateway', included: true },
        { name: 'Invites to live webinars by Industry experts', included: true },
        { name: 'Customised reports after each session with education pathways', included: true },
        { name: 'Guidance on studying abroad', included: true },
        { name: 'CV building during internships/graduation', included: true },
      ]
    },
    // Add other categories similarly based on screenshots...
  ]

  for (const pkg of packages) {
    await client.create(pkg)
  }

  console.log('Done populating')
}

populate().catch(console.error)
