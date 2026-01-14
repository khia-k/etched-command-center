// Company data structured from team_priorities_2026 spreadsheet

export const companyPriorities = [
  {
    id: 'prove-sohu',
    name: 'Prove Sohu to the World',
    description: 'Validate and demonstrate Sohu performance to customers and the market',
    color: '#3B82F6'
  },
  {
    id: 'win-market',
    name: 'Win Over the Market',
    description: 'Capture market share and establish market leadership',
    color: '#10B981'
  },
  {
    id: 'next-gen',
    name: 'Build Next-Gen in Parallel',
    description: 'Develop Caelius and next-generation products while executing current roadmap',
    color: '#8B5CF6'
  },
  {
    id: 'scale',
    name: 'Get to Scale',
    description: 'Build infrastructure and processes for volume production and deployment',
    color: '#F59E0B'
  }
];

export const teams = [
  { id: 'gtm', name: 'GTM', color: '#EF4444' },
  { id: 'software', name: 'Software', color: '#3B82F6' },
  { id: 'platform', name: 'Platform', color: '#10B981' },
  { id: 'asic-arch', name: 'ASIC/Architecture', color: '#8B5CF6' },
  { id: 'production', name: 'Production', color: '#F59E0B' },
  { id: 'docs', name: 'Docs', color: '#EC4899' },
  { id: 'growth-ops', name: 'Growth Ops', color: '#6366F1' },
  { id: 'finance-bizops', name: 'Finance & BizOps', color: '#14B8A6' }
];

export const programs = [
  // GTM Programs
  {
    id: 'gtm-product-launch',
    teamId: 'gtm',
    priorityId: 'prove-sohu',
    name: 'Execute the Product Launch',
    owner: 'Chase Holmes',
    objectives: [
      {
        id: 'gtm-pl-1',
        name: 'Execute the Product Launch',
        successCriteria: 'Execute a product launch that shocks the world with Sohu\'s performance. Develop key partnerships, launch the new website, public InferenceMax benchmarks, a timely Twitter storm, open-source Kayak drop with proper documentation, roadshow, and more. Every AI startup, lab, cloud, or hyperscaler CEO knows about Sohu.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-gtm-1', name: 'Sohu Launch Strategy', dueDate: '2026-02-15', status: 'In Progress' }
        ]
      }
    ]
  },
  {
    id: 'gtm-market-groundwork',
    teamId: 'gtm',
    priorityId: 'win-market',
    name: 'Win Over the Market Groundwork',
    owner: 'Chase Holmes',
    objectives: [
      {
        id: 'gtm-mg-1',
        name: 'Build a "Rolling Thunder" Media Playbook',
        successCriteria: 'Execute a media campaign that thrusts Etched into every AI or chip-related Tweet, earnings call, podcast, you name it. Continually reinforce that Etched is the market leader in next-gen AI compute.',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'gtm-mg-2',
        name: 'Build the Sohu Testbed',
        successCriteria: 'Make Sohu easily accessible to validate its performance and ease of use. Sohu should run on multiple GPU clouds / Inference-as-a-Service companies.',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'gtm-mg-3',
        name: 'Build Landmark Case Studies',
        successCriteria: 'Land key AI startups/scaleups that demonstrate Sohu\'s performance advantage on real customer workloads (e.g., coding, image/video, agents)',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gtm-frontier-lab',
    teamId: 'gtm',
    priorityId: 'win-market',
    name: 'Land an AI Frontier Lab or Hyperscaler',
    owner: 'Chase Holmes',
    objectives: [
      {
        id: 'gtm-fl-1',
        name: 'Land an AI Frontier Lab or Hyperscaler',
        successCriteria: 'Demonstrate Sohu and Etched dominate closed-source models and frontier workloads by partnering with a potential $XXB customer.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gtm-deals-win',
    teamId: 'gtm',
    priorityId: 'win-market',
    name: 'Deals',
    owner: 'Chase Holmes',
    objectives: [
      {
        id: 'gtm-d-1',
        name: 'Close + invoice 300 Racks in 2026',
        successCriteria: 'Close and invoice 300 racks in 2026.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gtm-customer-learnings',
    teamId: 'gtm',
    priorityId: 'next-gen',
    name: 'Integrate Customer Learnings and Competitive Analysis into Next-Gen',
    owner: 'Chase Holmes',
    objectives: [
      {
        id: 'gtm-cl-1',
        name: 'Integrate Customer Learnings and Competitive Analysis into Next-Gen',
        successCriteria: 'Create mechanisms for detailed customer feedback and market discovery to inform next-gen features and decisions.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gtm-cloud-playbook',
    teamId: 'gtm',
    priorityId: 'scale',
    name: 'Build a Winning Cloud Deployment Playbook',
    owner: 'Chase Holmes',
    objectives: [
      {
        id: 'gtm-cp-1',
        name: 'Build a Winning Cloud Deployment Playbook',
        successCriteria: 'Create a playbook that ensures we deliver on day-one for our customers, across logistics, rack installation, RMA, quality/reliability, ticketing, response strategies, and more. Build close relationships, deliver, and make the clouds love us.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gtm-customer-success',
    teamId: 'gtm',
    priorityId: 'scale',
    name: 'Build a Winning End-Customer Success Playbook',
    owner: 'Chase Holmes',
    objectives: [
      {
        id: 'gtm-cs-1',
        name: 'Build a Winning End-Customer Success Playbook',
        successCriteria: 'Create a unique "end-customer-first" deployment playbook that makes Etched the "default compute advisor" for our customers - whether the basics (SLAs, CSAT metrics), good docs products, or highlighting new AI research, use cases, and cluster feedback.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gtm-scale-groundwork',
    teamId: 'gtm',
    priorityId: 'scale',
    name: 'Scale Groundwork',
    owner: 'Chase Holmes',
    objectives: [
      {
        id: 'gtm-sg-1',
        name: 'Lock Down Large Customer Ramp Plans',
        successCriteria: 'Secure commits from our cloud and AI partners to scale to large scale in H2 2026 and 2027, enabling our production, supply chain, and finance teams to prepare Etched for aggressive scale.',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'gtm-sg-2',
        name: 'Build a "Scalable Unscalable" GTM Team',
        successCriteria: 'Build a world-class, lean GTM team that can handle the next level of customer inbound: (1) multiple large lab/hyperscaler deals in parallel, (2) multiple GPU clouds, and (3) hundreds of end customers in parallel. Ensure our team\'s standards for end customer market intel, technical and financial knowledge, operational excellence, and culture fit increase over time.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gtm-deals-scale',
    teamId: 'gtm',
    priorityId: 'scale',
    name: 'Deals',
    owner: 'Chase Holmes',
    objectives: [
      {
        id: 'gtm-ds-1',
        name: 'Close + invoice 900 Racks 2026',
        successCriteria: 'Close and invoice 900 racks in 2026.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },

  // Software Programs
  {
    id: 'sw-bringup',
    teamId: 'software',
    priorityId: 'prove-sohu',
    name: 'Bring-up',
    owner: 'Pawel Kozubek',
    objectives: [
      {
        id: 'sw-bu-1',
        name: 'Own the Cross-Functional Bring-Up Program',
        successCriteria: 'Drive the bring-up program (across test plans, lab readiness, test log databases, workstream enablement, etc.) to validate Sohu\'s performance ASAP',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-sw-1', name: 'Seven-Day Bringup Blackpaper', dueDate: '2026-01-31', status: 'In Progress' }
        ]
      }
    ]
  },
  {
    id: 'sw-inference-supremacy',
    teamId: 'software',
    priorityId: 'prove-sohu',
    name: 'Inference / Sohu Supremacy',
    owner: 'Michael Fein',
    objectives: [
      {
        id: 'sw-is-1',
        name: 'Support Sohu Supremacy and Inference Programs',
        successCriteria: 'Support Inference team with reliable firmware, SSW, infra, and software packages and support to hit Sohu\'s customer acceptance targets',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-sw-2', name: 'Version 1.0 of Sohu Profiler', dueDate: '2026-02-28', status: 'Planned' },
          { id: 'bp-sw-3', name: 'Version 2.0 of Server Health Daemon', dueDate: '2026-03-15', status: 'Planned' },
          { id: 'bp-sw-4', name: 'Ship Debugger', dueDate: '2026-03-31', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'sw-moe',
    teamId: 'software',
    priorityId: 'prove-sohu',
    name: 'MoE',
    owner: 'Christopher Zhu',
    objectives: [
      {
        id: 'sw-moe-1',
        name: 'Enable Sohu MoE Program ASAP',
        successCriteria: 'MoE models are the lifeblood of the largest AI customers and require world-class SSW and infrastructure development.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-sw-5', name: 'MoE RDMA PRD and Design Document', dueDate: '2026-02-15', status: 'In Progress' }
        ]
      }
    ]
  },
  {
    id: 'sw-growth-ops',
    teamId: 'software',
    priorityId: 'win-market',
    name: 'Growth Ops',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'sw-go-1',
        name: 'Win the Software Mandate from Heaven',
        successCriteria: 'After Sohu launch, create a vacuum that attracts the world\'s best talent, including supporting our media tour, bringing in the best people from our networks, generating excitement and hype around Sohu\'s launch whether it be through Linkedin posts, customer/investors tours, or providing technical documentation/proof points for customers',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'sw-cloud-partner',
    teamId: 'software',
    priorityId: 'win-market',
    name: 'Launch Cloud with Partner',
    owner: 'David Munday',
    objectives: [
      {
        id: 'sw-lcp-1',
        name: 'Launch Cloud with Partner',
        successCriteria: 'Launch a private cloud rack serving tokens via Artificial Analysis using the full Etched software stack.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-sw-6', name: 'Launch Cloud with Partner', dueDate: '2026-03-31', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'sw-infra-emulation',
    teamId: 'software',
    priorityId: 'next-gen',
    name: 'Build a World-Class Infra and Emulation Program',
    owner: 'David Munday',
    objectives: [
      {
        id: 'sw-ie-1',
        name: 'Build a World-Class Infra and Emulation Program',
        successCriteria: 'Create systems that predict and scale license usage, emulator demand, and compute demand early. Create systems that robustly track and continuously optimize core metrics (e.g., CI, emulator queue time, misused storage servers, etc.)',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-sw-7', name: 'Caelius Emulation Capacity Expansion', dueDate: '2026-04-30', status: 'Planned' },
          { id: 'bp-sw-8', name: 'Infrastructure (Licenses, Compute & Scripting - Procure)', dueDate: '2026-05-15', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'sw-caelius-chipsim',
    teamId: 'software',
    priorityId: 'next-gen',
    name: 'Build Caelius ChipSim and performance tools',
    owner: 'David Munday',
    objectives: [
      {
        id: 'sw-cc-1',
        name: 'Build Caelius ChipSim and performance tools',
        successCriteria: 'Create ChipSim and performance for Caelius, enabling much faster software development, debugging, and performance optimization.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-sw-9', name: '1.0 PRD Caelius', dueDate: '2026-04-15', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'sw-caelius-stack',
    teamId: 'software',
    priorityId: 'next-gen',
    name: 'Deliver the software stack in the Caelius Program',
    owner: 'David Munday',
    objectives: [
      {
        id: 'sw-cs-1',
        name: 'Deliver the software stack in the Caelius Program',
        successCriteria: 'Details to launch mid-January in the Caelius X-Func Program.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-sw-10', name: 'Customer testbed (Have the software to be on a cloud)', dueDate: '2026-06-30', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'sw-test-program',
    teamId: 'software',
    priorityId: 'scale',
    name: 'Test Software Program',
    owner: 'David Munday',
    objectives: [
      {
        id: 'sw-tp-1',
        name: 'Develop a World-Class Test Software Program',
        successCriteria: 'Ensure Sohu\'s reliability at scale and increase factory throughput through a very durable, reliable, high-coverage test program that minimizes RMAs, tracks and closes opportunity for coverage or cycle time improvements, and includes tools to optimize and analyze the test program health metrics',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-sw-11', name: 'SLT environment readiness and test', dueDate: '2026-03-15', status: 'In Progress' },
          { id: 'bp-sw-12', name: 'Three Week Mezzanine Test Sprint', dueDate: '2026-02-28', status: 'In Progress' },
          { id: 'bp-sw-13', name: '4U Assembled Tray Test', dueDate: '2026-03-31', status: 'Planned' },
          { id: 'bp-sw-14', name: 'Production 2U and 6U Host Tests', dueDate: '2026-04-15', status: 'Planned' },
          { id: 'bp-sw-15', name: 'Production L11 Rack Test', dueDate: '2026-04-30', status: 'Planned' },
          { id: 'bp-sw-16', name: 'Test Database and Integrations', dueDate: '2026-05-15', status: 'Planned' },
          { id: 'bp-sw-17', name: 'Shop Floor Rework Tool', dueDate: '2026-05-31', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'sw-lifecycle-db',
    teamId: 'software',
    priorityId: 'scale',
    name: 'Product Lifecycle Database',
    owner: 'David Munday',
    objectives: [
      {
        id: 'sw-pld-1',
        name: 'Develop a World-Class Product Lifecycle Database',
        successCriteria: 'This is essential for managing yield, part number tracking, correlations, testing data, and more at scale.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'sw-ssw-firmware',
    teamId: 'software',
    priorityId: 'scale',
    name: 'Caelius SSW and firmware',
    owner: 'David Munday',
    objectives: [
      {
        id: 'sw-csf-1',
        name: 'Build a SSW and firmware product ready for scale',
        successCriteria: 'Make sure Sohu is ready to ship at scale for GPU clouds and eventually large AI labs/hyperscalers, across, reliability, logging, tracing, health checks, debug, security, and more.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-sw-18', name: 'Firmware Security', dueDate: '2026-06-30', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'sw-taiwan',
    teamId: 'software',
    priorityId: 'scale',
    name: 'Taiwan',
    owner: 'Mutema Pittman',
    objectives: [
      {
        id: 'sw-tw-1',
        name: 'Enable Taiwan Production Independence (Taiwan Program)',
        successCriteria: 'Ensure the Taiwan office is ready to own a supermajority of the test, debug, and factory management work to enable the Etched US core team to focus on next-gen and customer deployments.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },

  // Platform Programs
  {
    id: 'plt-bringup',
    teamId: 'platform',
    priorityId: 'prove-sohu',
    name: 'Bringup',
    owner: 'Pawel Kozubek',
    objectives: [
      {
        id: 'plt-bu-1',
        name: 'Drive Platform Bring-Up',
        successCriteria: 'Ensure Sohu\'s boards, chassis, and entire rack are ready to quickly validate Sohu\'s performance enabling a rapid solution for customer deliveries ASAP. Make sure the Etched Lab is ready for Sohu Bringup and all engineering activities inclusive of Soho and Caelius.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-plt-1', name: 'Lab Setup and Safety', dueDate: '2026-01-31', status: 'In Progress' },
          { id: 'bp-plt-2', name: 'Mezzanine Card 4U Replacement SOP', dueDate: '2026-02-15', status: 'Planned' },
          { id: 'bp-plt-3', name: 'Sohu Power On & First Signs of Life', dueDate: '2026-02-28', status: 'Planned' },
          { id: 'bp-plt-4', name: 'PV1 Sohu Module Full Functionality', dueDate: '2026-03-15', status: 'Planned' },
          { id: 'bp-plt-5', name: 'Hand-built 8xSohu server', dueDate: '2026-03-31', status: 'Planned' },
          { id: 'bp-plt-6', name: 'Hand-built 4x8xSohu rack', dueDate: '2026-04-15', status: 'Planned' },
          { id: 'bp-plt-7', name: 'Product Rack Liquid Validation', dueDate: '2026-04-30', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'plt-moe',
    teamId: 'platform',
    priorityId: 'prove-sohu',
    name: 'MoE',
    owner: 'Christopher Zhu',
    objectives: [
      {
        id: 'plt-moe-1',
        name: 'Enable Sohu MoE Program ASAP',
        successCriteria: 'Ensure the platform development is ready to ship the MoE pod, finalize any learning which will apply to final HW rack design & BOM configuration.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-plt-8', name: 'Hand-built 128x MoE pod', dueDate: '2026-04-30', status: 'Planned' },
          { id: 'bp-plt-9', name: 'Hand-built 32xSohu table', dueDate: '2026-05-15', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'plt-validation',
    teamId: 'platform',
    priorityId: 'prove-sohu',
    name: 'Validation for Platform and Scale',
    owner: 'Brian Loiler',
    objectives: [
      {
        id: 'plt-v-1',
        name: 'Stabilize First Systems for Customer Workloads',
        successCriteria: 'Deliver robust and reliable early systems across power, thermal, electrical, and mechanical components to demonstrate Sohu Supremacy in real customer environments.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-plt-10', name: 'Sohu Silicon Qualification', dueDate: '2026-03-31', status: 'In Progress' }
        ]
      }
    ]
  },
  {
    id: 'plt-growth-ops',
    teamId: 'platform',
    priorityId: 'win-market',
    name: 'Growth Ops',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'plt-go-1',
        name: 'Win the Platform Mandate from Heaven',
        successCriteria: 'After Sohu launch, create a vacuum that attracts the world\'s best talent, including supporting our media tour, bringing in the best people from our networks, generating excitement and hype around Sohu\'s launch whether it be through Linkedin posts, customer/investors tours, or providing technical documentation/proof points for customers',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'plt-caelius-arch',
    teamId: 'platform',
    priorityId: 'next-gen',
    name: 'Caelius Platform Architecture',
    owner: 'Brian Loiler',
    objectives: [
      {
        id: 'plt-ca-1',
        name: 'Develop the Caelius Platform Architecture',
        successCriteria: 'Own next-gen board, interconnect, power, mechanical, thermal, electrical, and entire platform design for Caelius systems, with clear milestones and requirements aligned to the Caelius program plan.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-plt-11', name: 'Caelius Power Architecture proposal Freeze', dueDate: '2026-03-31', status: 'Planned' },
          { id: 'bp-plt-12', name: 'Lock down CPU MB Arch proposal', dueDate: '2026-04-15', status: 'Planned' },
          { id: 'bp-plt-13', name: 'Caelius Full Platform Architecture Proposal Freeze', dueDate: '2026-04-30', status: 'Planned' },
          { id: 'bp-plt-14', name: 'Caelius Bringup Eval board Arch', dueDate: '2026-05-15', status: 'Planned' },
          { id: 'bp-plt-15', name: 'Rack level 1st Cable Mockup Proto', dueDate: '2026-05-31', status: 'Planned' },
          { id: 'bp-plt-16', name: 'Blade Level 1st Mechanical Proto', dueDate: '2026-06-15', status: 'Planned' },
          { id: 'bp-plt-17', name: 'Rack Level Blade & Chassis Mech Proto', dueDate: '2026-06-30', status: 'Planned' },
          { id: 'bp-plt-18', name: 'TV1 PCBA Blade Proto in house', dueDate: '2026-07-15', status: 'Planned' },
          { id: 'bp-plt-19', name: 'TV1 SI Validation Test Vehicle completed', dueDate: '2026-07-31', status: 'Planned' },
          { id: 'bp-plt-20', name: 'TV1 Caelius Blade Power-T Test Vehicle Complete', dueDate: '2026-08-15', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'plt-caelius-mfg',
    teamId: 'platform',
    priorityId: 'next-gen',
    name: 'Caelius Platform Manufacturing Strategy',
    owner: 'Brian Loiler',
    objectives: [
      {
        id: 'plt-cm-1',
        name: 'Develop the Caelius Platform Manufacturing Strategy',
        successCriteria: 'Decide early in the program how we plan to product Caelius at massive scale (e.g., CM or otherwise), and partner with Production to evaluate options and make a decision early. Setup an execution plan which aligns to Caelius tapeout 2027',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-plt-21', name: 'Finalize ODM Selection for Caelius', dueDate: '2026-04-30', status: 'Planned' },
          { id: 'bp-plt-22', name: 'Caelius TTV Kick Off', dueDate: '2026-05-15', status: 'Planned' },
          { id: 'bp-plt-23', name: 'Caelius Coldplate Vendor Selection', dueDate: '2026-05-31', status: 'Planned' },
          { id: 'bp-plt-24', name: 'Caelius 224G Connector Selection', dueDate: '2026-06-15', status: 'Planned' },
          { id: 'bp-plt-25', name: 'Platform development schedule', dueDate: '2026-06-30', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'plt-growth-ops-ng',
    teamId: 'platform',
    priorityId: 'next-gen',
    name: 'Growth Ops',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'plt-gong-1',
        name: 'Build a world class Platform engineering & leadership team',
        successCriteria: 'capable to drive both Sohu to market & address technical challenges of Caelius',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'plt-validation-scale',
    teamId: 'platform',
    priorityId: 'scale',
    name: 'Validation for Platform and Scale',
    owner: 'Brian Loiler',
    objectives: [
      {
        id: 'plt-vs-1',
        name: 'Production-Ready Platform',
        successCriteria: 'Build systems to rapidly root cause and address issues to make our Platform manufacturable at scale with high quality and reliability. Create tools and processes for BOM management and optimizations at scale. Ensure we can deliver 300+ racks in 2026 and 3000+ in 2027.',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'plt-vs-2',
        name: 'Platform Field Support and Scaled Deployments',
        successCriteria: 'Work with Production to standardize field-debug tooling, replacement procedures, and datacenter integration playbooks so we can deploy, maintain, and repair systems at scale. Stand up properly functioning customer AE team fully staffed to support critical engineering in-field issues.',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'plt-vs-3',
        name: 'Production and Caelius-Ready Lab',
        successCriteria: 'Make sure our lab is ready to handle any testing, R&D, debug, RMA, or other activities required to get Sohu to scale and develop Caelius in parallel.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'plt-taiwan',
    teamId: 'platform',
    priorityId: 'scale',
    name: 'Taiwan',
    owner: 'Mutema Pittman',
    objectives: [
      {
        id: 'plt-tw-1',
        name: 'Support Taiwan Manufacturing Capability',
        successCriteria: 'Work with Production to stand up Platform manufacturing support team in Taiwan',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },

  // ASIC/Architecture Programs
  {
    id: 'asic-inference',
    teamId: 'asic-arch',
    priorityId: 'prove-sohu',
    name: 'Inference',
    owner: 'Michael Fein',
    objectives: [
      {
        id: 'asic-inf-1',
        name: 'Run the Inference Program',
        successCriteria: 'Validate our performance numbers and execute our open-source software release to the world. Build high performance kernels library to support a diversity of models.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-asic-1', name: 'Llama 70B InferenceMAX', dueDate: '2026-02-28', status: 'In Progress' },
          { id: 'bp-asic-2', name: 'Other 1x System Models', dueDate: '2026-03-15', status: 'Planned' },
          { id: 'bp-asic-3', name: 'Nebius/Mistral Customer Acceptance Tests', dueDate: '2026-03-31', status: 'Planned' },
          { id: 'bp-asic-4', name: 'Non-transformer Demos', dueDate: '2026-04-15', status: 'Planned' }
        ]
      },
      {
        id: 'asic-inf-2',
        name: 'Deliver on Inference\'s part of the MoE Program',
        successCriteria: 'Support MoE model inference on Sohu systems.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-asic-5', name: 'DeepSeek on 2xPP Systems', dueDate: '2026-04-30', status: 'Planned' },
          { id: 'bp-asic-6', name: 'DeepSeek InferenceMax', dueDate: '2026-05-15', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'asic-ws-ft',
    teamId: 'asic-arch',
    priorityId: 'prove-sohu',
    name: 'WS / FT',
    owner: 'Feng Wang',
    objectives: [
      {
        id: 'asic-wsft-1',
        name: 'Run the Wafer Sort and Final Test Program',
        successCriteria: 'Drive initial silicon test plans and validation to confirm silicon functionality and performance.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-asic-7', name: 'Wafer sort sprint', dueDate: '2026-02-15', status: 'In Progress' },
          { id: 'bp-asic-8', name: 'Two week FT Sprint (Replacing Cut-and-go Final Test Plan)', dueDate: '2026-02-28', status: 'Planned' },
          { id: 'bp-asic-9', name: 'Completed Silicon Yield Characterization', dueDate: '2026-03-31', status: 'Planned' },
          { id: 'bp-asic-10', name: 'Criteria for next wafer kickoff', dueDate: '2026-04-15', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'asic-supremacy',
    teamId: 'asic-arch',
    priorityId: 'win-market',
    name: 'Sohu Supremacy',
    owner: 'Michael Fein',
    objectives: [
      {
        id: 'asic-ss-1',
        name: 'Own the Performance Story with GTM',
        successCriteria: 'Produce clear, repeatable benchmarks (InferenceMax and other public proof points) that show Sohu\'s performance advantage. Help secure and execute partnerships, customer case studies, research partnerships, hackathons, and other opportunities to showcase Sohu\'s performance and capabilities to the public.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-asic-11', name: 'Non-transformer Demos', dueDate: '2026-04-30', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'asic-inference-win',
    teamId: 'asic-arch',
    priorityId: 'win-market',
    name: 'Inference',
    owner: 'Michael Fein',
    objectives: [
      {
        id: 'asic-iw-1',
        name: 'Showcase Model Coverage and Toolkit',
        successCriteria: 'Create an open-source developer ecosystem that rapidly expands Sohu\'s model coverage and minimizes time to support new models. Get regular feedback on the APIs and quickly iterate to meet developer and customer needs. Engage industry leaders on this front.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-asic-12', name: 'Kayak Integrations', dueDate: '2026-05-31', status: 'Planned' },
          { id: 'bp-asic-13', name: 'Externally Accessible Model Toolkit', dueDate: '2026-06-15', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'asic-growth-ops',
    teamId: 'asic-arch',
    priorityId: 'win-market',
    name: 'Growth Ops',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'asic-go-1',
        name: 'Win the ASIC/Architecture Mandate from Heaven',
        successCriteria: 'After Sohu launch, create a vacuum that attracts the world\'s best talent, including supporting our media tour, bringing in the best people from our networks, generating excitement and hype around Sohu\'s launch whether it be through Linkedin posts, customer/investors tours, or providing technical documentation/proof points for customers',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'asic-caelius',
    teamId: 'asic-arch',
    priorityId: 'next-gen',
    name: 'ASIC / ARCH Caelius Program',
    owner: 'Saptadeep Pal',
    objectives: [
      {
        id: 'asic-c-1',
        name: 'Execute the Caelius Program',
        successCriteria: 'Drive Caelius architecture through RTL design with a plan to reach initial netlist and begin timing closure in Q4, on track for a Q1 2027 tapeout. Deliver model mapping for Caelius on Emulation by Q4 2026. Establish X-Functional requirements early and often with Software, Platform, Production, GTM, Finance, and more.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-asic-14', name: 'Architecture Foundation & Macro Definition', dueDate: '2026-03-31', status: 'In Progress' },
          { id: 'bp-asic-15', name: 'Clocking & Reset Architecture', dueDate: '2026-04-15', status: 'Planned' },
          { id: 'bp-asic-16', name: 'Feature Set & Programming Model', dueDate: '2026-04-30', status: 'Planned' },
          { id: 'bp-asic-17', name: 'Simulator Infrastructure', dueDate: '2026-05-15', status: 'Planned' },
          { id: 'bp-asic-18', name: 'Packaging', dueDate: '2026-05-31', status: 'Planned' },
          { id: 'bp-asic-19', name: 'Systolic Array', dueDate: '2026-06-15', status: 'Planned' },
          { id: 'bp-asic-20', name: 'HBM Control Unit', dueDate: '2026-06-30', status: 'Planned' },
          { id: 'bp-asic-21', name: 'Memory Controller', dueDate: '2026-07-15', status: 'Planned' },
          { id: 'bp-asic-22', name: 'CSRAM', dueDate: '2026-07-31', status: 'Planned' },
          { id: 'bp-asic-23', name: 'Datalink + NLU + D2D Datapath', dueDate: '2026-08-15', status: 'Planned' },
          { id: 'bp-asic-24', name: 'Clock, Reset & Timing Infrastructure', dueDate: '2026-08-31', status: 'Planned' },
          { id: 'bp-asic-25', name: 'NoC Architecture & Integration', dueDate: '2026-09-15', status: 'Planned' },
          { id: 'bp-asic-26', name: 'mCPU & Security Subsystem', dueDate: '2026-09-30', status: 'Planned' },
          { id: 'bp-asic-27', name: 'Sensor, Debug & Monitoring Infrastructure', dueDate: '2026-10-15', status: 'Planned' },
          { id: 'bp-asic-28', name: 'IO Die Peripherals', dueDate: '2026-10-31', status: 'Planned' },
          { id: 'bp-asic-29', name: 'Verification v0.3', dueDate: '2026-11-15', status: 'Planned' },
          { id: 'bp-asic-30', name: 'PD Methodology', dueDate: '2026-11-30', status: 'Planned' },
          { id: 'bp-asic-31', name: 'Power Methodology', dueDate: '2026-12-15', status: 'Planned' },
          { id: 'bp-asic-32', name: 'PCIe Subsystem', dueDate: '2026-12-31', status: 'Planned' },
          { id: 'bp-asic-33', name: 'DFT Methodology', dueDate: '2027-01-15', status: 'Planned' }
        ]
      },
      {
        id: 'asic-c-2',
        name: 'Rebuild ASIC Engineering PM and Metrics',
        successCriteria: 'Develop systems that demonstrate the operational excellence and a predictable and aggressive ASIC execution schedule (metrics, dashboards, checklists, milestones, accountability, cross-team coordination and collaboration, Infra collaboration)',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'asic-c-3',
        name: 'Build a world-class Inference-SW-based DV org',
        successCriteria: 'Building off the work we did for Sohu, create an organization that does robust feature testing and verification before Caelius tapeout, furthering Etched\'s unique approach and competitive advantage.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'asic-backend',
    teamId: 'asic-arch',
    priorityId: 'next-gen',
    name: 'Support Production to Secure Back-End and IP Providers for Caelius',
    owner: 'Saptadeep Pal',
    objectives: [
      {
        id: 'asic-be-1',
        name: 'Support Production to Secure Back-End and IP Providers for Caelius',
        successCriteria: 'Plan and lock back-end provider to kick off Caelius design',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'asic-characterization',
    teamId: 'asic-arch',
    priorityId: 'scale',
    name: 'Launch a Silicon Characterization, Production, and Qualification Program',
    owner: 'Saptadeep Pal',
    objectives: [
      {
        id: 'asic-char-1',
        name: 'Launch a Silicon Characterization, Production, and Qualification Program, including "Sohu Independence"',
        successCriteria: 'Identify opportunities to improve Sohu yield, quality, and reliability after bringup. Expedite time to qualification and systematically identify opportunities to minimize Etched\'s reliance on external vendors, such as AlphaWave.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-asic-34', name: 'Yield optimization', dueDate: '2026-06-30', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'asic-inference-scale',
    teamId: 'asic-arch',
    priorityId: 'scale',
    name: 'Inference',
    owner: 'Michael Fein',
    objectives: [
      {
        id: 'asic-is-1',
        name: 'Deliver Scaled Customer Inference Support',
        successCriteria: 'Support customer inference at scale as outlined in Inference Readiness Program, including custom kernel work, Kayak improvements/upgrades, and other sustained performance and enablement work needed for production deployments. Build an Inference org that can support multiple clouds, IaaS providers, a handful of case study end customers, and AI labs/hyperscalers',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'asic-scale-groundwork',
    teamId: 'asic-arch',
    priorityId: 'scale',
    name: 'ASIC Scale Groundwork',
    owner: 'Saptadeep Pal',
    objectives: [
      {
        id: 'asic-sg-1',
        name: 'Build a benchmark and simulator engine',
        successCriteria: 'Create performance simulators, functional simulators, and benchmark tools to continually assess Sohu and Caelius\' current and potential performance over time.',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'asic-sg-2',
        name: 'Build a parallel execution machine',
        successCriteria: 'Etched\'s success depends on executing multiple programs in parallel to truly accelerate the industry\'s path towards super intelligence. Build a team which can build multiple ASICs and build the inference software stack for these in parallel.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },

  // Production Programs
  {
    id: 'prod-sohu-racks',
    teamId: 'production',
    priorityId: 'prove-sohu',
    name: 'Deliver production ready Sohu racks',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'prod-sr-1',
        name: 'Deliver production ready Sohu racks',
        successCriteria: 'Manufacture, assemble, and test enough working systems to prove Sohu in real end-to-end operation (from first power-on through sustained workloads in datacenters) as defined in the Manufacturing Readiness Plan and our Production Plan.',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-prod-1', name: 'Dummy Package Assembly', dueDate: '2026-02-15', status: 'In Progress' },
          { id: 'bp-prod-2', name: 'Mock Rack Delivery', dueDate: '2026-02-28', status: 'Planned' },
          { id: 'bp-prod-3', name: 'Logistics and Warehouse Enablement', dueDate: '2026-03-15', status: 'Planned' },
          { id: 'bp-prod-4', name: 'Sohu HW Compliance', dueDate: '2026-03-31', status: 'Planned' },
          { id: 'bp-prod-5', name: 'Sohu HW Certifications', dueDate: '2026-04-15', status: 'Planned' },
          { id: 'bp-prod-6', name: 'Pegatron L10 SOW Finalization', dueDate: '2026-04-30', status: 'Planned' },
          { id: 'bp-prod-7', name: 'Pegatron L11 SOW Finalization', dueDate: '2026-05-15', status: 'Planned' },
          { id: 'bp-prod-8', name: 'Pegatron MSA & MPA Finalization', dueDate: '2026-05-31', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'prod-mfg-readiness',
    teamId: 'production',
    priorityId: 'prove-sohu',
    name: 'Manufacturing Readiness',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'prod-mr-1',
        name: 'Stand Up Initial Reliability Processes',
        successCriteria: 'Establish the initial RMA flows, spares strategy, repair workflows, and failure handling loops needed to support early deployments',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'prod-mr-2',
        name: 'Prove Repeatability Not Just First Success',
        successCriteria: 'Demonstrate that Sohu racks can be built, tested, shipped, and deployed repeatedly with consistent results. By the second half of 2026, later builds must require no additional engineering support beyond defined production processes',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'prod-mr-3',
        name: 'Validate End to End Production Readiness',
        successCriteria: 'Complete and execute a Manufacturing Readiness Plan that proves silicon supply manufacturing capacity logistics deployment and field support are all ready for real customers before volume ramp',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'prod-growth-ops',
    teamId: 'production',
    priorityId: 'win-market',
    name: 'Growth Ops',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'prod-go-1',
        name: 'Win the Production Mandate from Heaven',
        successCriteria: 'After Sohu launch, create a vacuum that attracts the world\'s best talent, including supporting our media tour, bringing in the best people from our networks, generating excitement and hype around Sohu\'s launch whether it be through Linkedin posts, customer/investors tours, or providing technical documentation/proof points for customers',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'prod-mfg-readiness-win',
    teamId: 'production',
    priorityId: 'win-market',
    name: 'Manufacturing Readiness',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'prod-mrw-1',
        name: 'Enable GTM to move aggressively',
        successCriteria: 'Provide accurate delivery timelines capacity signals and production constraints so GTM can commit aggressively without fear of failure or surprise delays',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'prod-mrw-2',
        name: 'Reinforce Etched Credibility With Suppliers',
        successCriteria: 'Establish Etched as a serious long term partner to key suppliers by providing a disciplined forecast, clear decision making, and professional execution so suppliers prioritize Etched for capacity schedule and support',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'prod-caelius-mfg',
    teamId: 'production',
    priorityId: 'next-gen',
    name: 'Caelius Manufacturing Readiness',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'prod-cm-1',
        name: 'Lock Supplier and Capacity Strategy for Next-Gen',
        successCriteria: 'Identify and secure key manufacturing partners, tooling, materials, and ramp timelines for Caelius',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-prod-9', name: 'First pass supplier list review for Gen 2', dueDate: '2026-04-30', status: 'Planned' },
          { id: 'bp-prod-10', name: 'Contract Manufacturing RFP Process for Gen 2', dueDate: '2026-05-31', status: 'Planned' },
          { id: 'bp-prod-11', name: 'DFX Platform Review', dueDate: '2026-06-15', status: 'Planned' },
          { id: 'bp-prod-12', name: 'Critical Component Risk Assessment', dueDate: '2026-06-30', status: 'Planned' },
          { id: 'bp-prod-13', name: 'Costed BOM & Sensitivity Analysis', dueDate: '2026-07-15', status: 'Planned' },
          { id: 'bp-prod-14', name: 'Initial Silicion Kickoff Quantities at Tapeout', dueDate: '2026-07-31', status: 'Planned' }
        ]
      },
      {
        id: 'prod-cm-2',
        name: 'Encode Sohu Lessons Into Next-Gen product Early',
        successCriteria: 'Capture production and reliability lessons from Sohu and explicitly mandate which constraints and failure modes must not repeat in Caelius design and manufacturing decisions',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'prod-mfg-readiness-scale',
    teamId: 'production',
    priorityId: 'scale',
    name: 'Manufacturing Readiness',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'prod-mrs-1',
        name: 'Build Taiwan Manufacturing Capability for Scale',
        successCriteria: 'Stand up stable lines, trained staff, logistics, and quality systems that support volume production (300+ racks in 2026, 3000+ in 2027) at Pegatron as outlined in Production Plan',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'prod-mrs-2',
        name: 'Own Test, Yield, and Quality',
        successCriteria: 'Define yield targets and reliability thresholds, and run failure analytics and continuous manufacturing/supply chain improvement loops',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'prod-mrs-3',
        name: 'Build a Production System That Can Scale With Demand',
        successCriteria: 'Reduce single points of failure across supply chain, manufacturing, and logistics and establish a clear capacity expansion path so increased demand does not require emergency response',
        hasBlackpapers: false,
        blackpapers: []
      },
      {
        id: 'prod-mrs-4',
        name: 'Create Clear Production Visibility and Control',
        successCriteria: 'Provide leadership with accurate real time visibility into capacity yields delivery status and risks so aggressive business decisions can be made with confidence',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'prod-customer-readiness',
    teamId: 'production',
    priorityId: 'scale',
    name: 'Customer Readiness',
    owner: 'Mike Hsieh',
    objectives: [
      {
        id: 'prod-cr-1',
        name: 'Scale Customer Fulfillment Strategy',
        successCriteria: 'Standardize RMAs, spares, SLAs, and field service processes so we can maintain, repair, and replace systems across many customers',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },

  // Docs Programs
  {
    id: 'docs-program',
    teamId: 'docs',
    priorityId: 'win-market',
    name: 'Docs',
    owner: 'Jack Kiernan',
    objectives: [
      {
        id: 'docs-1',
        name: 'Fill in X-Func',
        successCriteria: 'Complete cross-functional documentation requirements',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-docs-1', name: 'Shippable P0/P1 Sohu Documentation', dueDate: '2026-03-31', status: 'In Progress' },
          { id: 'bp-docs-2', name: 'Shippable P1/P2 Documentation', dueDate: '2026-04-30', status: 'Planned' }
        ]
      }
    ]
  },

  // Growth Ops Programs
  {
    id: 'gops-critical-programs',
    teamId: 'growth-ops',
    priorityId: 'prove-sohu',
    name: 'Build the Team for our Critical Programs',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'gops-cp-1',
        name: 'Build the Team for our Critical Programs',
        successCriteria: 'Ensure we hire sufficiently to support bring-up, inference, and the initial production ramp without bottlenecks (see programs at go/x-func)',
        hasBlackpapers: true,
        blackpapers: [
          { id: 'bp-gops-1', name: 'ASIC Hiring Requirements for Caelius', dueDate: '2026-02-28', status: 'In Progress' },
          { id: 'bp-gops-2', name: 'Inference Hiring Requirements for Sohu', dueDate: '2026-03-15', status: 'Planned' }
        ]
      }
    ]
  },
  {
    id: 'gops-talent-vacuum',
    teamId: 'growth-ops',
    priorityId: 'win-market',
    name: 'Talent Vacuum',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'gops-tv-1',
        name: 'Talent Vacuum',
        successCriteria: 'After Sohu launch, completely redesign our recruiting motion to fully capture the influx of talent that will be drawn to Etched. Generate hype around hiring, referrals, and raising the bar in order to pull in world-class engineers and materially increase our talent and culture density. This should feel like a massive internal call to arms.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gops-culture',
    teamId: 'growth-ops',
    priorityId: 'win-market',
    name: 'Culture Differentiation',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'gops-cd-1',
        name: 'Culture Differentiation',
        successCriteria: 'Build a culture and talent strategy that attracts the best people in the world and clearly differentiates Etched versus competitors. Build cleaner org chart, R&R, team charters, and better perf and incentive systems for exceptional contributions and displays of the Etched values. Create mechanisms to routinely review and improve organizational talent and culture density.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gops-caelius-team',
    teamId: 'growth-ops',
    priorityId: 'next-gen',
    name: 'Build the Caelius Program Across Teams',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'gops-ct-1',
        name: 'Build the Caelius Program Across Teams',
        successCriteria: 'Ensure we hire the talent needed to execute the Caelius Program across teams. Highlight recruiting gaps as early as possible to enable our team leads to plan accordingly.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gops-scale-systems',
    teamId: 'growth-ops',
    priorityId: 'scale',
    name: 'Build People Systems for Scale',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'gops-ss-1',
        name: 'Build People Systems for Scale',
        successCriteria: 'Processes that support performance differentiation, culture alignment, and incentivizing exceptional performance at scale.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'gops-office',
    teamId: 'growth-ops',
    priorityId: 'scale',
    name: 'Explore Office Expansion',
    owner: 'Corey Richard',
    objectives: [
      {
        id: 'gops-oe-1',
        name: 'Explore Office Expansion',
        successCriteria: 'Ensure we have the space and infrastructure to support our planned headcount ramp.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },

  // Finance & BizOps Programs
  {
    id: 'fin-execution',
    teamId: 'finance-bizops',
    priorityId: 'prove-sohu',
    name: 'Execution for Bring-Up and First Deployments',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-ex-1',
        name: 'Execution for Bring-Up and First Deployments',
        successCriteria: 'Drive operational excellence in analytics, dependency tracking, readiness programs, and operational infrastructure to drive bring-up through initial deployments',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-procurement',
    teamId: 'finance-bizops',
    priorityId: 'prove-sohu',
    name: 'Keep Resourcing and Procurement Unblocked',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-pr-1',
        name: 'Keep Resourcing and Procurement Unblocked',
        successCriteria: 'Budgeting, approvals, and material/procurement readiness to enable initial systems and prevent execution from stalling on spend or parts',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-cost-transparency',
    teamId: 'finance-bizops',
    priorityId: 'prove-sohu',
    name: 'Establish Cost and Spend Transparency for Early Production',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-ct-1',
        name: 'Establish Cost and Spend Transparency for Early Production',
        successCriteria: 'Track and report actual costs for silicon, manufacturing, logistics, and deployments so leadership understands the real cost of proving Sohu in the field',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-capital-narrative',
    teamId: 'finance-bizops',
    priorityId: 'win-market',
    name: 'Build the Capital and Supplier Narrative',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-cn-1',
        name: 'Build the Capital and Supplier Narrative',
        successCriteria: 'Demonstrate financial readiness and responsibility externally (across both supplier confidence and market credibility) as part of launch and media campaigns',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-strategic-finance',
    teamId: 'finance-bizops',
    priorityId: 'win-market',
    name: 'Build a World Class Strategic Finance Capability',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-sf-1',
        name: 'Build a World Class Strategic Finance Capability',
        successCriteria: 'Establish a strategic finance function that proactively ensures capital availability never blocks Etched from scaling. This includes forward looking capital planning, scenario modeling, supplier prepayment strategies, and coordination with fundraising partners to support aggressive growth',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-mandate',
    teamId: 'finance-bizops',
    priorityId: 'win-market',
    name: 'Win the BizOps/Finance Mandate from Heaven',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-m-1',
        name: 'Win the BizOps/Finance Mandate from Heaven',
        successCriteria: 'After Sohu launch, create a vacuum that attracts the world\'s best talent, including supporting our media tour, bringing in the best people from our networks, generating excitement and hype around Sohu\'s launch whether it be through Linkedin posts, customer/investors tours, or providing documentation/proof points for customers',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-caelius-execution',
    teamId: 'finance-bizops',
    priorityId: 'next-gen',
    name: 'Build Caelius Execution Structure',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-ce-1',
        name: 'Build Caelius Execution Structure',
        successCriteria: 'Cross-team planning, risk management, and goal frameworks that keep next-gen execution on schedule. Make sure risks to schedule or performance are highlighted and closed as early as possible.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-nextgen-financial',
    teamId: 'finance-bizops',
    priorityId: 'next-gen',
    name: 'Own Next-Gen Financial Strategy',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-nf-1',
        name: 'Own Next-Gen Financial Strategy',
        successCriteria: 'Multi-year financial models across CapEx, P&L, budgeting, supply chain ramp, etc. to support Caelius development and ramp. Forecast Caelius critical spend items early to maximize negotiation leverage.',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-capital-strategy',
    teamId: 'finance-bizops',
    priorityId: 'next-gen',
    name: 'Align Capital Strategy to Product Roadmap',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-cs-1',
        name: 'Align Capital Strategy to Product Roadmap',
        successCriteria: 'Ensure fundraising timing, capital structure, and investor messaging are aligned with Caelius development and ramp milestones',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-audit-ready',
    teamId: 'finance-bizops',
    priorityId: 'scale',
    name: 'Be Audit Ready to Unlock 2027 Capital',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-ar-1',
        name: 'Be Audit Ready to Unlock 2027 Capital',
        successCriteria: 'Build accounting controls documentation and processes that support clean audits and diligence. By end of 2026 Etched must be fully audit ready to unlock new sources of capital and financing in 2027 without delaying growth',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-operating-rhythm',
    teamId: 'finance-bizops',
    priorityId: 'scale',
    name: 'Reinvent Company Operating Rhythm',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-or-1',
        name: 'Reinvent Company Operating Rhythm',
        successCriteria: 'MBRs, blackpapers, and Jira-based project tracking to drive execution across teams, as well as company goal setting (town halls, all hands, quarterly board meetings, etc.)',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-scaleup-finance',
    teamId: 'finance-bizops',
    priorityId: 'scale',
    name: 'Drive a Scale-Up Strategic Finance Strategy',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-ssf-1',
        name: 'Drive a Scale-Up Strategic Finance Strategy',
        successCriteria: 'Explore capital financing structures that support volume deployments with maximum capital efficiency and enable customers to execute $XB deals',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-visibility',
    teamId: 'finance-bizops',
    priorityId: 'scale',
    name: 'Enable Real Time Visibility Into Spend and Resource Allocation',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-v-1',
        name: 'Enable Real Time Visibility Into Spend and Resource Allocation',
        successCriteria: 'Provide leadership with near real time insight into where money is being spent across silicon manufacturing production headcount and operations. Decisions on scale hiring and capital allocation must be informed by accurate current data rather than lagging reports',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-unit-economics',
    teamId: 'finance-bizops',
    priorityId: 'scale',
    name: 'Drive Unit Economics and Margin Discipline',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-ue-1',
        name: 'Drive Unit Economics and Margin Discipline',
        successCriteria: 'Partner with Production, Platform, and GTM to scale with financial discipline (pricing, working capital, margins, and AR/AP)',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  },
  {
    id: 'fin-ops-scale',
    teamId: 'finance-bizops',
    priorityId: 'scale',
    name: 'Build Financial Ops for Scale and Support',
    owner: 'Tim Perevozchikov',
    objectives: [
      {
        id: 'fin-os-1',
        name: 'Build Financial Ops for Scale and Support',
        successCriteria: 'Financial operations infrastructure to handle high transaction volume, plus RMA/inventory accounting in NetSuite that supports scaled customer support',
        hasBlackpapers: false,
        blackpapers: []
      }
    ]
  }
];

// Helper functions
export const getProgramsByPriorityAndTeam = (priorityId, teamId) => {
  return programs.filter(p => p.priorityId === priorityId && p.teamId === teamId);
};

export const getProgramsByPriority = (priorityId) => {
  return programs.filter(p => p.priorityId === priorityId);
};

export const getTeamsWithProgramsForPriority = (priorityId) => {
  const programsForPriority = getProgramsByPriority(priorityId);
  const teamIds = [...new Set(programsForPriority.map(p => p.teamId))];
  return teams.filter(t => teamIds.includes(t.id));
};

export const getProgramById = (programId) => {
  return programs.find(p => p.id === programId);
};

export const getObjectiveById = (objectiveId) => {
  for (const program of programs) {
    const objective = program.objectives.find(o => o.id === objectiveId);
    if (objective) return { ...objective, program };
  }
  return null;
};

export const getBlackpaperById = (blackpaperId) => {
  for (const program of programs) {
    for (const objective of program.objectives) {
      const blackpaper = objective.blackpapers.find(b => b.id === blackpaperId);
      if (blackpaper) return { ...blackpaper, objective, program };
    }
  }
  return null;
};
