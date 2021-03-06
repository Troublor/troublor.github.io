import { Profile } from './types';

export default <Profile>{
  name: {
    first: 'William',
    middle: 'Aaron',
    last: 'Cheung',
    formal: 'Wuqi Zhang',
    previous: ['Wuqi Aaron Zhang', '张无奇'],
  },
  emails: {
    work: 'wuqi.zhang@connect.ust.hk',
    personal: 'troublor@live.com',
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
  resume:
    'https://github.com/Troublor/curriculum-vitae/blob/main/release/cv-latest.pdf',
  description: `I am currently a Ph.D. candidate supervised by professor Shing-Chi Cheung at The Hong Kong University of Science and Technology (HKUST) with a research focus: software engineering, especially in software testing and analysis.
    As a member of the CASTLE Research Group at HKUST, it is very nice to work with a professional and very kind professor, as well as a group of innovative researchers.`,
  titles: [
    'Full Stack Software Developer',
    'Software Engineering Researcher',
    'Ph.D. Candidate',
  ],
  socialNetworks: [
    {
      link: 'https://github.com/Troublor',
      iconName: 'faGithub',
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
      period: '2019 - Present',
      institute: 'The Hong Kong University of Science and Technology (HKUST)',
      group: 'CASTLE Research Group',
      role: 'Postgraduate Research Student',
      focus: ['Software Engineering', 'Software Testing', 'Program Analysis'],
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
      group: "Prof. Huaiyu Dai's Group",
      institute: 'North Carolina State University',
      role: 'Undergraduate Summer Research Student',
      focus: ['Complex Network'],
    },
  ],
  publications: [
    {
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
      paperUrl: '',
      /* eslint-disable no-useless-escape */
      bibtex: `
    `,
    },
    {
      title:
        'Fast Test Input Generation for Finding Deviated Behaviors in Compressed Deep Neural Network',
      year: '2021',
      authors: [
        'Yongqiang Tian',
        'Wuqi Zhang',
        'Ming Wen',
        'Shing-Chi Cheung',
        'Chengnian Sun',
        'Shiqing Ma',
        'Yu Jiang',
      ],
      venue: 'arXiv:2112.02819',
      venueShort: 'arXiv',
      abstract: `
      Model compression can significantly reduce sizes of deep neural network (DNN) models so that large, sophisticated models after compression can be deployed on resource-limited mobile and IoT devices. However, model compression often introduces deviated behaviors into a compressed model: the original and compressed models output different prediction results for the same input. Hence, it is critical to warn developers and help them comprehensively evaluate possible consequences of such behaviors before deployment. To this end, we propose TriggerFinder, a novel, effective and efficient testing approach to automatically identifying inputs to trigger deviated behaviors in compressed models. Given an input i as a seed, TriggerFinder iteratively applies a series of mutation operations to change i until the resulting input triggers a deviated behavior.
However, compressed models usually hide their architecture and gradient information; without such internal information as guidance, it becomes difficult to effectively and efficiently trigger deviated behaviors. To tackle this challenge, we propose a novel fitness function to determine the mutated input that is closer to the inputs that can trigger the deviated predictions. Furthermore, TriggerFinder models this search problem as a Markov Chain process and leverages the Metropolis-Hasting algorithm to guide the selection of mutation operators.
We evaluated TriggerFinder on 18 compressed models with two datasets. The experiment results demonstrate that TriggerFinder can successfully find triggering inputs for all seed inputs while the baseline fails in certain cases. As for efficiency, TriggerFinder is 5.2x-115.8x as fast as the baselines. Furthermore, the queries required by TriggerFinder to find one triggering input is only 51.8x-535.6x as small as the baseline.
    `,
      projectUrl: '',
      arxivUrl: 'https://arxiv.org/abs/2112.02819',
      paperUrl: '',
      /* eslint-disable no-useless-escape */
      bibtex: `
@article{DBLP:journals/corr/abs-2112-02819,
  author    = {Yongqiang Tian and
               Wuqi Zhang and
               Ming Wen and
               Shing{-}Chi Cheung and
               Chengnian Sun and
               Shiqing Ma and
               Yu Jiang},
  title     = {Fast Test Input Generation for Finding Deviated Behaviors in Compressed
               Deep Neural Network},
  journal   = {CoRR},
  volume    = {abs/2112.02819},
  year      = {2021},
  url       = {https://arxiv.org/abs/2112.02819},
  eprinttype = {arXiv},
  eprint    = {2112.02819},
  timestamp = {Wed, 08 Dec 2021 14:48:59 +0100},
  biburl    = {https://dblp.org/rec/journals/corr/abs-2112-02819.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
    `,
    },
    {
      title:
        'WFDefProxy: Modularly Implementing and Empirically Evaluating Website Fingerprinting Defenses',
      year: '2021',
      authors: ['Jiajun Gong', 'Wuqi Zhang', 'Charles Zhang', 'Tao Wang'],
      venue: 'arXiv:2111.12629',
      venueShort: 'arXiv',
      abstract: `
      Tor, an onion-routing anonymity network, has been shown to be vulnerable to Website Fingerprinting (WF), which de-anonymizes web browsing by analyzing the unique characteristics of the encrypted network traffic. Although many defenses have been proposed, few have been implemented and tested in the real world; others were only simulated. Due to its synthetic nature, simulation may fail to capture the real performance of these defenses. To figure out how these defenses perform in the real world, we propose WFDefProxy, a general platform for WF defense implementation on Tor using pluggable transports. We create the first full implementation of three WF defenses: FRONT, Tamaraw and Random-WT. We evaluate each defense in both simulation and implementation to compare their results, and we find that simulation correctly captures the strength of each defense against attacks. In addition, we confirm that Random-WT is not effective in both simulation and implementation, reducing the strongest attacker's accuracy by only 7%.
We also found a minor difference in overhead between simulation and implementation. We analyze how this may be due to assumptions made in simulation regarding packet delays and queuing, or the soft stop condition we implemented in WFDefProxy to detect the end of a page load. The implementation of FRONT cost about 23% more data overhead than simulation, while the implementation of Tamaraw cost about 28% - 45% less data overhead. In addition, the implementation of Tamaraw incurred only 21% time overhead, compared to 51% - 242% estimated by simulation in previous work.
    `,
      projectUrl: '',
      arxivUrl: 'https://arxiv.org/abs/2111.12629',
      paperUrl: '',
      /* eslint-disable no-useless-escape */
      bibtex: `
@article{DBLP:journals/corr/abs-2111-12629,
  author    = {Jiajun Gong and
               Wuqi Zhang and
               Charles Zhang and
               Tao Wang},
  title     = {WFDefProxy: Modularly Implementing and Empirically Evaluating Website
               Fingerprinting Defenses},
  journal   = {CoRR},
  volume    = {abs/2111.12629},
  year      = {2021},
  url       = {https://arxiv.org/abs/2111.12629},
  eprinttype = {arXiv},
  eprint    = {2111.12629},
  timestamp = {Fri, 26 Nov 2021 13:48:43 +0100},
  biburl    = {https://dblp.org/rec/journals/corr/abs-2111-12629.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
    `,
    },
    {
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
      paperUrl: '{ASSETS}/DArcher-FSE21.pdf',
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
      paperUrl:
        '{ASSETS}/Characterizing_Transaction_Reverting_Statements-ASE21.pdf',
      slidesUrl: '',
      bibtex: `
        `,
    },
  ],
};
