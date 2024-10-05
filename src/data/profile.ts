import { Profile } from './interface';

export const profile: Profile = {
  name: {
    first: 'William',
    middle: ' ',
    last: 'Cheung',
    formal: 'Wuqi Zhang',
    chinese: '张无奇',
  },
  address: [
    'Room 3663 (via 3661)',
    'Academic Building',
    'The Hong Kong University of Science and Technology',
    'Hong Kong, China',
  ],
  emails: {
    academic: 'wuqi.zhang@connect.ust.hk',
    work: 'william.c@megaeth.technology',
    personal: 'reachout@troublor.xyz',
  },
  username: 'Troublor',
  domain: 'troublor.xyz',
  resume: 'https://troublor.github.io/curriculum-vitae/cv.pdf',
  dblp: 'https://dblp.org/pid/295/8585.html',
  googleScholar:
    'https://scholar.google.com/citations?user=MdH5hE0AAAAJ&hl=en&oi=ao',
  github: 'https://github.com/Troublo',
  occupations: [
    {
      title: 'Research Scientist',
      institute: 'MegaETH',
    },
    {
      title: 'Research Scholar',
      institute: 'Purdue University',
    },
  ],
  description: `I am currently a research scientist at MegaETH (MegaRollup Inc.), a leading blockchain company focused on enhancing the performance of next-generation blockchain technologies. I also currently a research scholar at Purdue University in Prof. Xiangyu Zhang's research group. I obtained my Ph.D. in 2024 from The Hong Kong University of Science and Technology, where I was supervised by Professor Shing-Chi Cheung. My research interests include programming, software architecture design, program analysis, and bug detection. As both a software engineering researcher and a full-stack engineer, I am passionate about developing innovative solutions to improve software systems and tackle challenges in blockchain technology.`,
  titles: [
    'Full Stack Software Developer',
    'Software Engineering Researcher',
    'Research Scholar',
    'Ph.D. in Computer Science and Engineering',
    'Web3 CTFer',
    'Bug Hunter',
  ],
  socialNetworks: [
    {
      name: 'GitHub',
      link: 'https://github.com/Troublor',
      iconName: 'faGithub',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/troublor/',
      iconName: 'faInstagram',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/troublor',
      iconName: 'faXTwitter',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/wuqi-zhang-9b2182146/',
      iconName: 'faLinkedin',
    },
  ],
  sections: [
    {
      title: 'Bio',
      content: [
        'I am a Research Scientist at MegaETH, a leading company dedicated to advancing the performance of next-generation blockchain technology. I am driven by a vision to transform the world through blockchain, leveraging its potential to revolutionize various aspects of modern life.',
        'In addition to my role at MegaETH, I am an independent researcher, currently a visiting scholar at Purdue University, collaborating with Professor Xiangyu Zhang. My research interests span the full spectrum of software engineering, from software architecture design to program analysis and bug detection.',
        'Development is central to my work and my life. As a full-stack developer, I am proficient in creating a wide range of tools and systems. I co-lead the MEDGA team, focusing on improving the development experience of blockchain applications, and I contribute to well-known open-source projects, including Foundry and Slither.',
        'I earned my Ph.D. in 2024 from The Hong Kong University of Science and Technology (HKUST) under the supervision of Professor Shing-Chi Cheung. My journey also includes an internship at the Hong Kong Applied Science and Technology Research Institute (ASTRI), where I gained valuable experience in applied research.',
      ],
    },
    {
      title: 'News',
      news: [
        {
          date: [2024, 7, 19],
          content:
            'I successfully defended my Ph.D. dissertation, titled "Defect Detection for Smart Contracts and Blockchain Applications".',
        },
        {
          date: [2024, 6, 19],
          content:
            'Our MEDGA project was awarded a grant from the Ethereum Ecosystem Support Program.',
          decoration: {
            links: {
              MEDGA: 'https://medga.org',
              grant: 'https://blog.ethereum.org/2024/08/30/esp-allocation-q224',
            },
          },
        },
      ],
    },
    {
      title: 'Research',
      overview: [
        'I actively research and develop quality assurance techniques and effective development tools for real-world software, driven by a deep comprehension of programs and a broad spectrum of domain knowledge. My research aim to bring various advanced techniques and theories to a practical level, making them accessible to developers and researchers and empowering the building of reliable and secure software systems.',
        'In general, I am interested in software testing and bug detection of various softwares, including blockchain applications, deep learning systems, compilers, and Internet of Things (IoT) applications.',
      ],
      research: [
        {
          direction: 'Quality Assurance for Blockchain-related Applications',
          description: [
            "We have been focusing on the reliability and security analysis of blockchain-related softwares throughout the whole development stack. We started from a thorough understanding of the nature of blockchain applications and bugs charactureistics (ASE '21, TSE, ISSTA '24). Then, we propose a series of techniques and tools to improve the quality of smart contracts (S&P '24) and decentralized applications (FSE '21). We also contribute on smart contract quality assurance from the aspect of programing language design (PLDI '24), preventing most flaws at early stage during development.",
            'Taking our work to practice, we have participated several CTF contests (Tied #3 in zkCTF 2024, #12 in BlazCTF 2023) and smart contract auditing campaigns (secured over $2M of funds).',
          ],
          decoration: {
            links: {
              'zkCTF 2024': 'https://zkctf.scalebit.xyz/scoreboard',
              'BlazCTF 2023':
                'https://x.com/troublor/status/1731680082693943363',
              "ASE '21":
                'https://dl.acm.org/doi/abs/10.1109/ASE51524.2021.9678597',
              TSE: 'https://ieeexplore.ieee.org/document/10108045',
              "ISSTA '24": 'https://dl.acm.org/doi/abs/10.1145/3650212.3680362',
              "S&P '24": 'https://ieeexplore.ieee.org/document/10646603',
              "FSE '21": 'https://dl.acm.org/doi/10.1145/3468264.3468546',
              "PLDI '24": 'https://dl.acm.org/doi/abs/10.1145/3656416',
            },
          },
        },
        {
          direction: 'LLM for Software Engineering and Program Analysis',
          description: [
            "We are exploring the potential of large language models (LLMs) in software engineering and program analysis, especially when solving undecidable problems and performing domain-specific analysis. We investigate the data contamination (data leakage) concern and its mitigations in LLM4SE tasks (arXiv:2403). We also propose and demonstrate the effectiveness of LLM-based program analysis paradigm, featuring the customizability and accessibility (NeurIPS '24, EMNLP '24), encouraging the community to easily and universally apply program analysis on real-world program property analysis and bug detection tasks.",
          ],
          decoration: {
            links: {
              'arXiv:2403': 'https://arxiv.org/abs/2403.16898',
              "NeurIPS '24": 'https://neurips.cc/virtual/2024/poster/95227',
              "EMNLP '24":
                'https://chengpeng-wang.github.io/publications/LLMSAN_EMNLP2024.pdf',
            },
          },
        },
      ],
    },
    {
      title: 'Service',
      pcMember: [
        {
          organization:
            'IEEE International Symposium on Software Reliability Engineering (ISSRE)',
          years: [2024],
        },
        {
          organization:
            'ACM SIGPLAN International Conference on Programming Language Design and Implementation (PLDI) - Artifact Evaluation',
          years: [2024],
        },
        {
          organization:
            'International Conference on Software Engineering (ICSE) - Artifact Evaluation',
          years: [2024, 2023],
        },
        {
          organization:
            'ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA) - Artifact Evaluation',
          years: [2024, 2023],
        },
      ],
      reviewer: [
        {
          organization:
            'ACM Transactions on Software Engineering and Methodology (TOSEM)',
        },
        {
          organization:
            'IEEE Transactions on Dependable and Secure Computing (TDSC)',
        },
      ],
    },
    {
      title: 'Impacts',
      impacts: [
        {
          text: 'Co-leader of MEDGA project: A project that aims to improve the development and debugging experience of smart contracts.',
          secendaryText: 'Grant from Ethereum Ecosystem Support Program.',
          decoration: {
            links: {
              MEDGA: 'https://medga.org',
              Grant: 'https://blog.ethereum.org/2024/08/30/esp-allocation-q224',
            },
          },
        },
        {
          text: 'Core developer of Froundry Tweak: A foundry fork that can alter onchain verified contracts (e.g. add console.log) & replay historical transactions.',
          secendaryText:
            'Covered by Week in Ethereum News (Stuff for developers).',
          decoration: {
            links: {
              Tweak: 'https://github.com/MEDGA-eth/foundry',
              'Week in Ethereum News':
                'https://weekinethereumnews.com/week-in-ethereum-news-april-6-2024/',
            },
          },
        },
        {
          text: 'Contributor of `forge clone` functionality in Foundry.',
          secendaryText: 'Announced on Twitter.',
          decoration: {
            links: {
              'forge clone':
                'https://book.getfoundry.sh/reference/forge/forge-clone',
              Twitter: 'https://x.com/troublor/status/1780984367931695256',
            },
          },
        },
      ],
    },
  ],
};
