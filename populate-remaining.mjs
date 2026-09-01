import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'xhb8i5d7',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: 'skPmbaFXuObZUhfDX7Xf5TGluwL3vbBNz796ACr5xOjb3UGjcoTW6UQOrEHiDCghuE97LuE7C9Dr5jCNjYApNGm8ix5WwAPrXr5A2FvnlHYPHqASUzNnry38rYtBinIcGvoJgpWIq8RPMOXJJNUeyTVIIRgr7Vjrldo0OEH5hnHuC4lpoxlv',
  useCdn: false
})

async function populateRemaining() {
  console.log('Populating remaining data...')
  
  const packages = [
    {
      _type: 'pricingPackage',
      category: '10-12 STUDENTS',
      tier: 'STANDARD',
      title: 'Achieve Online',
      price: 5999,
      features: [
        { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { name: '1 career counselling session', included: true },
        { name: 'Lifetime access to Knowledge Gateway', included: true },
        { name: 'Pre-recorded webinars by industry experts', included: true },
        { name: 'Customised reports after each session with education pathways', included: false },
        { name: 'Guidance on studying abroad', included: false },
        { name: 'CV reviews during internships/graduation', included: false },
      ]
    },
    {
      _type: 'pricingPackage',
      category: '10-12 STUDENTS',
      tier: 'PREMIUM',
      title: 'Achieve Plus+',
      price: 10599,
      features: [
        { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { name: '4 career counselling sessions', included: true },
        { name: 'Lifetime access to Knowledge Gateway', included: true },
        { name: 'Attend live webinars by industry experts', included: true },
        { name: 'Customised reports after each session with education pathways', included: true },
        { name: 'Guidance on studying abroad', included: true },
        { name: 'CV reviews during internships/graduation', included: true },
      ]
    },
    {
      _type: 'pricingPackage',
      category: 'COLLEGE GRADUATES',
      tier: 'STANDARD',
      title: 'Ascend Online',
      price: 6499,
      features: [
        { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { name: '1 career counselling session', included: true },
        { name: 'Lifetime access to Knowledge Gateway', included: true },
        { name: 'Pre-recorded webinars by industry experts', included: true },
        { name: 'Customised reports after each session with information on certificate/online courses', included: false },
        { name: 'Guidance on studying abroad', included: false },
        { name: 'CV reviews for job application', included: false },
      ]
    },
    {
      _type: 'pricingPackage',
      category: 'COLLEGE GRADUATES',
      tier: 'PREMIUM',
      title: 'Ascend Plus+',
      price: 10599,
      features: [
        { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { name: '3 career counselling sessions', included: true },
        { name: 'Lifetime access to Knowledge Gateway', included: true },
        { name: 'Attend live webinars by industry experts', included: true },
        { name: 'Customised reports after each session with information on certificate/online courses', included: true },
        { name: 'Guidance on studying abroad', included: true },
        { name: 'CV reviews for job application', included: true },
      ]
    },
    {
      _type: 'pricingPackage',
      category: 'WORKING PROFESSIONALS',
      tier: 'STANDARD',
      title: 'Ascend Online',
      price: 6499,
      features: [
        { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { name: '1 career counselling session', included: true },
        { name: 'Lifetime access to Knowledge Gateway', included: true },
        { name: 'Pre-recorded webinars by industry experts', included: true },
        { name: 'Customised reports after each session with information on certificate/online courses', included: false },
        { name: 'Guidance on studying abroad', included: false },
        { name: 'CV reviews for job application', included: false },
      ]
    },
    {
      _type: 'pricingPackage',
      category: 'WORKING PROFESSIONALS',
      tier: 'PREMIUM',
      title: 'Ascend Plus+',
      price: 10599,
      features: [
        { name: 'Psychometric assessment to measure your interests, personality and abilities', included: true },
        { name: '3 career counselling sessions', included: true },
        { name: 'Lifetime access to Knowledge Gateway', included: true },
        { name: 'Attend live webinars by industry experts', included: true },
        { name: 'Customised reports after each session with information on certificate/online courses', included: true },
        { name: 'Guidance on studying abroad', included: true },
        { name: 'CV reviews for job application', included: true },
      ]
    }
  ]

  const customPackages = [
    {
      _type: 'customPackage',
      title: 'Career Report',
      price: 1500,
      description: 'Get a detailed report of your psychometric assessment for a scientific analysis of your interests. Find out where your interests lie and which future paths you can potentially consider.',
      icon: 'report'
    },
    {
      _type: 'customPackage',
      title: 'Career Report + Career Counselling',
      price: 3000,
      description: 'Connect with India\'s top career coaches to analyse your psychometric report and shortlist the top three career paths you\'re most likely to enjoy and excel at.',
      icon: 'counselling'
    },
    {
      _type: 'customPackage',
      title: 'Knowledge Gateway + Career Helpline Access',
      price: 100,
      description: 'Unlock holistic information on your career paths and get direct access to Mentoria\'s experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love.',
      icon: 'gateway'
    },
    {
      _type: 'customPackage',
      title: 'One-to-One Session with a Career Expert',
      price: 3500,
      description: 'Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field.',
      icon: 'session'
    },
    {
      _type: 'customPackage',
      title: 'College Admission Planning',
      price: 3000,
      description: 'Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner.',
      icon: 'planning'
    },
    {
      _type: 'customPackage',
      title: 'Exam Stress Management',
      price: 1000,
      description: 'Get expert guidance on tackling exam stress, planning your study schedule, revision tips and more from India\'s top educators. Increase your chances of acing exams with a calm and clear mind.',
      icon: 'stress'
    },
    {
      _type: 'customPackage',
      title: 'College Admissions Planner - 100 (CAP-100)',
      price: 199,
      description: '₹199 for a ranked list of the top 100 colleges in your course Get an expert-curated list of colleges based on verified cut-offs. CAP-100 ranks the top 100 colleges into four tiers to help you plan smarter: Indian Ivy League, Target, Smart Backup, and Safe Bet colleges. You can then shortlist colleges based on where you stand!',
      icon: 'cap100'
    }
  ]

  for (const pkg of packages) {
    await client.create(pkg)
  }

  for (const pkg of customPackages) {
    await client.create(pkg)
  }

  console.log('Done populating remaining data')
}

populateRemaining().catch(console.error)
