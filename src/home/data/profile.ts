/* eslint-disable quotes */
import { Profile } from './types';

export default <Profile>{
  name: {
    first: 'William',
    middle: 'Aaron',
    last: 'Cheung',
    formal: 'Wuqi Zhang',
    previous: ['Wuqi Aaron Zhang', '张无奇'],
    initials: 'W.A.C.',
  },
  emails: {
    work: 'wuqi.zhang@connect.ust.hk',
    personal: 'reachout@troublor.xyz',
  },
  address: [
    'Room 3663 (via 3661)',
    'Academic Building',
    'The Hong Kong University of Science and Technology',
    'Hong Kong, China',
  ],
  username: 'Troublor',
  domain: 'troublor.xyz',
  github: 'https://github.com/Troublor',
  resume: 'https://troublor.github.io/curriculum-vitae/cv.pdf',
  description: `I'm William Aaron Cheung.
  My formal name is Wuqi Zhang, but I prefer to use the English name in most informal cases.
  Wuqi Aaron Zhang is also used in some cases.
  I am a Ph.D. candidate supervised by Prof. Shing-Chi Cheung at The Hong Kong University of Science and Technology (HKUST) working in software engineering and security.
  I also work as a research scholar at Purdue University in the group led by Prof. Xiangyu Zhang. `,
  researchInterests: [
    'Software testing and program analysis with an application to blockchain',
    'Deap learning system and application testing',
    'Software testing for Internet of Things (IoT) applications',
    'Website fingerprinting attack and defense',
  ],
  titles: [
    'Full Stack Software Developer',
    'Software Engineering Researcher',
    'Research Scholar',
    'Ph.D. Candidate',
    'Web3 CTFer',
    'Bug Hunter',
  ],
  socialNetworks: [
    {
      link: 'https://github.com/Troublor',
      iconName: 'faGithub',
    },
    {
      link: 'https://www.instagram.com/troublor/',
      iconName: 'faInstagram',
    },
    {
      link: 'https://twitter.com/troublor',
      iconName: 'faTwitter',
    },
    {
      link: 'https://www.facebook.com/wuqi.aaron.zhang',
      iconName: 'faFacebook',
    },
  ],
  statistics: [
    // {
    //   number: 3,
    //   title: 'Publications',
    //   iconPrefix: 'far',
    //   iconName: 'newspaper',
    // },
    // {
    //   number: 2,
    //   title: 'Citations',
    //   iconPrefix: 'far',
    //   iconName: 'newspaper',
    // },
  ],
  educations: [
    {
      period: '2019 - Present',
      school: 'The Hong Kong University of Science and Technology',
      degreeAbbr: 'Ph.D.',
      degree: 'Doctor of Philosophy',
      major: 'Computer Science and Engineering',
      description: '',
    },
    {
      period: '2015 - 2019',
      school: 'Northeastern University, China',
      degreeAbbr: 'B.Eng.',
      degree: 'Bachelor of Engineering',
      major: 'Computer Science and Technology',
      description: 'Outstanding Graduates. Academic Ranking 1/250.',
    },
  ],
  awards: [
    {
      name: 'Overseas Research Award',
      time: '2023',
      organization: 'The Hong Kong University of Science and Technology',
    },
    {
      name: 'Research Travel Grant',
      time: '2022',
      organization: 'The Hong Kong University of Science and Technology',
    },
    {
      name: 'HKUST RedBird Academic Excellence Award',
      time: '2022',
      organization: 'The Hong Kong University of Science and Technology',
    },
    {
      name: 'Postgraduatge Studentship',
      time: '2019',
      organization: 'The Hong Kong University of Science and Technology',
    },
    {
      name: 'Outstanding Graduate of Liaoning Province',
      time: '2019',
      organization: 'Department of Education of Liaoning, China',
    },
    {
      name: 'Second-Class University Scholarship',
      time: '2018',
      organization: 'Northeastern University, China',
    },
    {
      name: 'Excellent Student Award',
      time: '2018',
      organization: 'Northeastern University, China',
    },
    {
      name: 'National Scholarship',
      time: '2017, 2016',
      organization: 'Ministry of Education of China',
    },
    {
      name: 'First-Class University Scholarship',
      time: '2017, 2016',
      organization: 'Northeastern University, China',
    },
    {
      name: 'Pacemaker to Excellent Student Award',
      time: '2017, 2016',
      organization: 'Northeastern University, China',
    },
  ],
  workExperiences: [
    {
      period: '2020 - 2021',
      location: 'Hong Kong, China',
      organization:
        'Hong Kong Applied Science and Technology Research Institute (ASTRI)',
      position: 'Ethereum Application Developer',
      description: '',
    },
    {
      period: '2018 - 2019',
      location: 'Shenyang, Liaoning, China',
      organization: 'Shenyang Wuzhi Technology Co., Ltd.',
      position: 'Application Backend Developer',
      description: '',
    },
    {
      period: '2015 - 2019',
      location: 'Shenyang, Liaoning, China',
      organization: 'Publicity Department, Northeastern University',
      position: 'Full Stack Web Developer',
      description: '',
    },
  ],
  researchExperience: [
    {
      period: '2023',
      institute: 'Purdue University',
      group: 'Prof. Xiangyu Zhang',
      role: 'Research Scholar',
      focus: ['Program Analysis', 'Blockchain Security'],
    },
    {
      period: '2019 - Present',
      institute: 'The Hong Kong University of Science and Technology (HKUST)',
      group: 'CASTLE Research Group',
      role: 'Postgraduate Research Student',
      focus: [
        'Software Engineering',
        'Software Testing',
        'Program Analysis',
        'Blockchain Security',
      ],
    },
    {
      period: '2019',
      institute: 'The Hong Kong University of Science and Technology (HKUST)',
      group: 'CASTLE Research Group',
      role: 'Undergraduate Research Intern',
      focus: ['Program Analysis'],
    },
    {
      period: '2018',
      /* eslint-disable-next-line */
      group: 'Prof. Huaiyu Dai',
      institute: 'North Carolina State University',
      role: 'Undergraduate Summer Research Student',
      focus: ['Complex Network Analysis'],
    },
  ],
  teaching: [
    {
      courseCode: 'COMP3021',
      courseName: 'Java Programming',
      link: 'https://www.cse.ust.hk/comp3021/',
      time: '2022 Fall, 2021 Fall, 2020 Fall',
      university: 'The Hong Kong University of Science and Technology',
      role: 'Teaching Assistant',
    },
    {
      courseCode: 'CSIT5100',
      courseName: 'Engineering Reliable Object-Oriented Software Systems',
      link: 'http://www.cse.ust.hk/~scc/Password_Only/csit5100/',
      time: '2023 Fall, 2022 Fall',
      university: 'The Hong Kong University of Science and Technology',
      role: 'Teaching Assistant',
    },
    {
      courseCode: 'COMP5111',
      courseName: 'Fundamentals of Software Testing and Analysis',
      link: 'https://course.cse.ust.hk/comp5111_new/',
      time: '2021 Spring',
      university: 'The Hong Kong University of Science and Technology',
      role: 'Teaching Assistant',
    },
  ],
  service: [
    {
      time: "PLDI'24",
      organization: 'The 45rd ACM SIGPLAN International Conference on Programming Language Design and Implementation',
      role: 'Reviewer - Artifact Evaluation Track',
      link: 'https://pldi24.sigplan.org/track/pldi-2024-pldi-research-artifacts',
    },
    {
      time: "ICSE'24",
      organization: 'The 46rd International Conference on Software Engineering',
      role: 'Reviewer - Artifact Evaluation Track',
      link: 'https://conf.researchr.org/home/icse-2024',
    },
    {
      time: "ICSE'23",
      organization: 'The 45rd International Conference on Software Engineering',
      role: 'Reviewer - Artifact Evaluation Track',
      link: 'https://conf.researchr.org/home/icse-2023',
    },
    {
      time: "ISSTA'23",
      organization:
        'The 32th ACM SIGSOFT International Symposium on Software Testing and Analysis',
      role: 'Reviewer - Artifact Evaluation Track',
      link: 'https://conf.researchr.org/home/issta-2023',
    },
  ],
  publications: [
    {
      type: 'conference',
      title:
        'Nyx: Detecting Exploitable Front-Running Vulnerabilities in Smart Contracts',
      year: '2023',
      authors: [
        'Wuqi Zhang',
        'Zhuo Zhang',
        'Qingkai Shi',
        'Lu Liu',
        'Lili Wei',
        'Yepang Liu',
        'Xiangyu Zhang',
        'Shing-Chi Cheung',
      ],
      venue: 'The 45th IEEE Symposium on Security and Privacy',
      venueShort: 'S&P',
      abstract: `Smart contracts are susceptible to front-running attacks, in which malicious users leverage prior knowledge of upcoming transactions to execute attack transactions in advance and benefit their own portfolios. Existing contract analysis techniques raise a number of false positives and false negatives in that they simplistically treat data races in a contract as front-running vulnerabilities and can only analyze contracts in isolation. In this work, we formalize the definition of exploitable front-running vulnerabilities based on previous empirical studies on historical attacks, and present Nyx, a novel static analyzer to detect them. Nyx features a Datalog-based preprocessing procedure that efficiently and soundly prunes a large part of the search space, followed by a symbolic validation engine that precisely locates vulnerabilities with an SMT solver. We evaluate Nyx using a large dataset that comprises 513 real-world front-running attacks in smart contracts. Compared to six state-of-the-art techniques, Nyx surpasses them by 32.64%-90.19% in terms of recall and 2.89%-70.89% in terms of precision. Nyx has also identified four zero-days in real-world smart contracts.`,
      projectUrl: '',
      arxivUrl: '',
      paperUrl: '',
      bibtex: '',
    },
    {
      type: 'journal',
      title:
        'WFDefProxy: Real World Implementation and Evaluation of Website Fingerprinting Defenses',
      year: '2023',
      authors: ['Jiajun Gong', 'Wuqi Zhang', 'Charles Zhang', 'Tao Wang'],
      venue: 'IEEE Transactions on Information Forensics and Security',
      venueShort: 'TIFS',
      abstract: `Tor, an onion-routing anonymity network, can be attacked by Website Fingerprinting (WF), which de-anonymizes encrypted web browsing traffic by analyzing its unique sequence characteristics. Although many defenses have been proposed, few have been implemented and tested in the real world; most state-of-the-art defenses were only simulated. Simulations fail to capture the real performance of these defenses as they make simplifying assumptions about the protocol stack and network conditions. To allow WF defenses to be analyzed as real implementations, we create WFDefProxy, the first general platform for WF defense implementation on Tor as pluggable transports. We implement three state-of-the-art WF defenses: FRONT, Tamaraw, and RegulaTor. We evaluate each defense extensively by directly collecting defended datasets under WFDefProxy. Our results show that simulation can be inaccurate in many cases. Specifically, Tamaraw’s time overhead was underestimated by 22% in one setting and overestimated by 24% in another. RegulaTor’s time overhead was underestimated by 30–40%. We find that a major source of simulation inaccuracy is that they cannot incorporate how packets depend on each other. We also find that adverse network conditions (which are ignored in simulation), especially congestion, can affect the evaluated overhead of defenses. These results show that it is important to evaluate defenses as implementations instead of only simulations to avoid errors in evaluation.`,
      projectUrl: 'https://github.com/websitefingerprinting/wfdef',
      arxivUrl: '',
      paperUrl: 'https://ieeexplore.ieee.org/document/10295524/',
      bibtex: '',
    },
    {
      type: 'journal',
      title:
        'Combatting Front-Running in Smart Contracts: Attack Mining, Benchmark Construction and Vulnerability Detector Evaluation',
      year: '2023',
      authors: [
        'Wuqi Zhang',
        'Lili Wei',
        'Shing-Chi Cheung',
        'Yepang Liu',
        'Shuqing Li',
        'Lu Liu',
        'Michael R. Lyu',
      ],
      venue: 'Transactions on Software Engineering',
      venueShort: 'TSE',
      abstract: `
      Front-running attacks have been a major concern on the blockchain. Attackers launch front-running attacks by inserting additional transactions before upcoming victim transactions to manipulate victim transaction executions and make profits. Recent studies have shown that front-running attacks are prevalent on the Ethereum blockchain and have caused millions of US dollars loss. Vulnerable smart contracts, blockchain programs invoked by transactions, are held responsible for front-running attacks. Although techniques to detect front-running vulnerabilities have been proposed, their performance on real-world vulnerable contracts is unclear. There is no large-scale benchmark based on real attacks to evaluate their capabilities. This motivates us to build a benchmark consisting of 513 real-world attacks with vulnerable code labeled in 235 distinct smart contracts. We propose automated techniques to effectively collect real-world attacks and localize the corresponding vulnerable code at scale. Our experiments show that our approaches are effective, achieving higher recall in finding real attacks and higher precision in pinpointing vulnerabilities compared to the existing techniques. The evaluation of seven state-of-the-art vulnerability detection techniques on the benchmark reveals their inadequacy in detecting front-running vulnerabilities, with a low recall of at most 6.04%. Our further analysis identifies four common limitations in existing techniques: lack of support for inter-contract analysis, inefficient constraint solving for cryptographic operations, improper vulnerability patterns, and lack of token support.
    `,
      projectUrl: 'https://github.com/Troublor/erebus-redgiant',
      arxivUrl: '',
      paperUrl: 'https://ieeexplore.ieee.org/document/10108045',
      /* eslint-disable no-useless-escape */
      bibtex: '',
    },
    {
      type: 'journal',
      title:
        'Finding Deviated Behaviors of the Compressed DNN Models for Image Classifications',
      year: '2023',
      authors: [
        'Yongqiang Tian',
        'Wuqi Zhang',
        'Ming Wen',
        'Shing-Chi Cheung',
        'Chengnian Sun',
        'Shiqing Ma',
        'Yu Jiang',
      ],
      venue: 'ACM Transactions on Software Engineering and Methodology (TOSEM)',
      venueShort: 'TOSEM',
      abstract: '',
      projectUrl: '',
      arxivUrl: '',
      paperUrl: 'https://dl.acm.org/doi/10.1145/3583564',
      bibtex: '',
    },
    {
      type: 'conference',
      title:
        'Surakav: Generating Realistic Traces for a Strong Website Fingerprinting Defense',
      year: '2022',
      authors: ['Jiajun Gong', 'Wuqi Zhang', 'Charles Zhang', 'Tao Wang'],
      venue: 'The 43rd IEEE Symposium on Security and Privacy ',
      venueShort: 'S&P',
      abstract: `
      Website Fingerprinting (WF) attacks utilize size and timing information of encrypted network traffic to infer the user's browsing activity, posing a great threat to privacy-enhancing technologies like Tor; nevertheless, Tor has not adopted any defense because existing defenses are not convincing enough to show their effectiveness. Some defenses have been overcome by newer attacks; other defenses are never implemented and tested in the real open-world scenario.
In this paper, we propose Surakav, a tunable and practical defense that is effective against WF attacks with reasonable overhead. Surakav makes use of a Generative Adversarial Network (GAN) to generate realistic sending patterns and regulates buffered data according to the sampled patterns. We implement Surakav and evaluate it on the live Tor network. Experiments show that Surakav is able to reduce the attacker's true positive rate by 57% with 55% data overhead and 16% time overhead, saving 42% data overhead compared to FRONT. In the heavyweight setting, Surakav outperforms the strongest known defense, Tamaraw, requiring 50% less overhead in data and time to lower the attacker's true positive rate to only 8%. We also show that two existing defenses, Walkie-Talkie and TrafficSliver, can be fortified with our GAN-based trace generator.
    `,
      projectUrl: 'https://github.com/websitefingerprinting/surakav-imp',
      arxivUrl: '',
      paperUrl: 'https://ieeexplore.ieee.org/document/9833722',
      /* eslint-disable no-useless-escape */
      bibtex: `
    `,
    },
    {
      type: 'conference',
      title:
        'ÐArcher: Detecting On-Chain-Off-Chain Synchronization Bugs in Decentralized Applications',
      year: '2021',
      authors: [
        'Wuqi Zhang',
        'Lili Wei',
        'Shuqing Li',
        'Yepang Liu',
        'Shing-Chi Cheung',
      ],
      venue:
        'Proceedings of the 29th ACM Joint European SoftwareEngineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE ’21)',
      venueShort: 'ESEC/FSE',
      abstract: `
    Since the emergence of Ethereum, blockchain-based decentralized applications (DApps) have become increasingly popular and important. To balance the security, performance, and costs, a DApp typically consists of two layers: an on-chain layer to execute transactions and store crucial data on blockchain, and an off-chain layer to interact with users. A DApp needs to proactively synchronize its off-chain layer with the on-chain layer, otherwise, the inconsistent data in the off-chain layer could mislead users and cause undesirable consequences, e.g., loss of transaction fees. However, transactions sent to blockchain are not guaranteed to be executed and could even be reversed after execution due to chain reorganization. Such non-determinism in the transaction execution is unique to blockchain and DApp developers may fail to perform the on-chain-off-chain synchronization accurately due to their unfamiliarity of the complex transaction lifecycle.
    In this work, we investigate the challenges of synchronizing on-chain and off-chain data in Ethereum-based DApps. We present two types of bugs that could result in inconsistencies between the on-chain and off-chain layers. To help detect such on-chain-off-chain synchronization bugs, we introduce a state transition model to guide the testing of DApps, and propose two effective oracles to facilitate the automatic identification of bugs. We build the first testing framework, ÐArcher, to detect on-chain-off-chain synchronization bugs in DApps. We have evaluated ÐArcher on 11 popular real-world DApps. ÐArcher achieves high precision (99.3%), recall (87.6%), and accuracy (89.4%) in bug detection and significantly outperforms the baseline methods. It has found 15 real bugs in the 11 DApps. So far, six of the 15 bugs have been confirmed by the developers and three have been fixed. These promising results demonstrate the usefulness of ÐArcher.
    `,
      projectUrl: 'https://github.com/Troublor/darcher',
      arxivUrl: 'https://arxiv.org/pdf/2106.09440.pdf',
      paperUrl: 'https://dl.acm.org/doi/10.1145/3468264.3468546',
      /* eslint-disable no-useless-escape */
      bibtex: `
    @inproceedings{10.1145/3468264.3468546,
      author = {Zhang, Wuqi and Wei, Lili and Li, Shuqing and Liu, Yepang and Cheung, Shing-Chi},
      title = {\DH{}Archer: Detecting on-Chain-off-Chain Synchronization Bugs in Decentralized Applications},
      year = {2021},
      isbn = {9781450385626},
      publisher = {Association for Computing Machinery},
      address = {New York, NY, USA},
      url = {https://doi.org/10.1145/3468264.3468546},
      doi = {10.1145/3468264.3468546},
      abstract = {Since the emergence of Ethereum, blockchain-based decentralized applications (DApps)
      have become increasingly popular and important. To balance the security, performance,
      and costs, a DApp typically consists of two layers: an on-chain layer to execute transactions
      and store crucial data on the blockchain and an off-chain layer to interact with users.
      A DApp needs to synchronize its off-chain layer with the on-chain layer proactively.
      Otherwise, the inconsistent data in the off-chain layer could mislead users and cause
      undesirable consequences, e.g., loss of transaction fees. However, transactions sent
      to the blockchain are not guaranteed to be executed and could even be reversed after
      execution due to chain reorganization. Such non-determinism in the transaction execution
      is unique to blockchain. DApp developers may fail to perform the on-chain-off-chain
      synchronization accurately due to their lack of familiarity with the complex transaction
      lifecycle. In this work, we investigate the challenges of synchronizing on-chain and
      off-chain data in Ethereum-based DApps. We present two types of bugs that could result
      in inconsistencies between the on-chain and off-chain layers. To help detect such
      on-chain-off-chain synchronization bugs, we introduce a state transition model to
      guide the testing of DApps and propose two effective oracles to facilitate the automatic
      identification of bugs. We build the first testing framework, \DH{}Archer, to detect on-chain-off-chain
      synchronization bugs in DApps. We have evaluated \DH{}Archer on 11 popular real-world
      DApps. \DH{}Archer achieves high precision (99.3%), recall (87.6%), and accuracy (89.4%)
      in bug detection and significantly outperforms the baseline methods. It has found
      15 real bugs in the 11 DApps. So far, six of the 15 bugs have been confirmed by the
      developers, and three have been fixed. These promising results demonstrate the usefulness
      of \DH{}Archer.},
      booktitle = {Proceedings of the 29th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering},
      pages = {553–565},
      numpages = {13},
      keywords = {Software testing, DApps, Decentralized applications, Blockchain},
      location = {Athens, Greece},
      series = {ESEC/FSE 2021}
    }
    `,
    },
    {
      type: 'conference',
      title:
        'Characterizing Transaction-Reverting Statements in Ethereum Smart Contracts',
      year: '2021',
      authors: [
        'Lu Liu',
        'Lili Wei',
        'Wuqi Zhang',
        'Ming Wen',
        'Yepang Liu',
        'Shing-Chi Cheung',
      ],
      venue:
        'The 36th IEEE/ACM International Conference on Automated Software Engineering',
      venueShort: 'ASE',
      awards: [],
      abstract: `
Smart contracts are programs stored on blockchains to execute transactions.
When input constraints or security properties are violated at runtime, the transaction being executed by a smart contract needs to be reverted to avoid undesirable consequences.
On Ethereum, the most popular blockchain that supports smart contracts, developers can choose among three transaction-reverting statements (i.e., require, if...revert, and if...throw) to handle anomalous transactions.
While these transaction-reverting statements are vital for preventing smart contracts from exhibiting abnormal behaviors or suffering malicious attacks, there is limited understanding of how they are used in practice.
In this work, we perform the first empirical study to characterize transaction-reverting statements in Ethereum smart contracts.
We measured the prevalence of these statements in 3,866 verified smart contracts from popular dapps and built a taxonomy of their purposes via manually analyzing 557 transaction-reverting statements.
We also compared template contracts and their corresponding custom contracts to understand how developers customize the use of transaction-reverting statements.
Finally, we analyzed the security impact of transaction-reverting statements by removing them from smart contracts and comparing the mutated contracts against the original ones.
Our study led to important findings.
For example, we found that transaction-reverting statements are commonly used to perform seven types of authority verifications or validity checks, and missing such statements may compromise the security of smart contracts.
We also found that current smart contract security analyzers cannot effectively handle transaction-reverting statements when detecting security vulnerabilities.
Our findings can shed light on further research in the broad area of smart contract quality assurance and provide practical guidance to smart contract developers on the appropriate use of transaction-reverting statements.
        `,
      projectUrl:
        'https://github.com/transaction-reverting-statements/Characterizing-require-statement-in-Ethereum-Smart-Contract',
      arxivUrl: 'https://arxiv.org/abs/2108.10799',
      paperUrl: 'https://dl.acm.org/doi/abs/10.1109/ASE51524.2021.9678597',
      slidesUrl: '',
      bibtex: `
        `,
    },
  ],
};
