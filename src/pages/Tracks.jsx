import React from 'react'
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react'

const tracksData = [
  {
    trackTitle: 'Track 1: Information Systems Engineering',
    subpoints: [
      'Enterprise Architecture and Systems Integration',
      'Data Modeling and Database Design',
      'Business Process Management and Automation',
      'Information Systems Security and Privacy',
      'User Experience and Interface Design in Information Systems',
      'Agile Methods in Information Systems Development',
      'Information Systems for Healthcare',
      'Internet of Things (IoT) and Information Systems',
      'Sustainability in Information Systems',
    ],
  },
  {
    trackTitle: 'Track 2: Machine Learning, Deep Learning and Artificial Intelligence',
    subpoints: [
      'Neural Networks and Deep Learning Architectures',
      'Reinforcement Learning and Autonomous Systems',
      'Transfer Learning and Domain Adaptation',
      'Explainable AI and Model Interpretability',
      'Natural Language Processing and Understanding',
      'Computer Vision and Image Recognition',
      'Generative Models and Adversarial Networks',
      'AI Ethics and Fairness in Machine Learning',
      'Scalable Machine Learning for Big Data',
      'AI in Healthcare and Bioinformatics',
      'Robotics and Intelligent Agents',
      'AI in Cybersecurity and Fraud Detection',
      'AI for Edge and IoT Devices',
      'Hybrid AI Systems and Multi-Model Integration',
    ],
  },
  {
    trackTitle: 'Track 3: Green and Sustainable IT Systems',
    subpoints: [
      'Energy-Efficient Computing and Data Centers',
      'Green Cloud Computing',
      'Sustainable Software Engineering Practices',
      'Low-Power and Energy-Aware Algorithms',
      'Green Networking and Communication Technologies',
      'Carbon Footprint Reduction in IT Systems',
      'Resource Management and Optimization for Sustainability',
      'Renewable Energy Integration in IT Infrastructure',
      'Eco-Friendly Hardware Design and Development',
      'Sustainable AI and Machine Learning Models',
      'Lifecycle Assessment of IT Products and Services',
      'Sustainable Data Storage and Management Solutions',
      'Green IT Policies and Regulatory Compliance',
      'Sustainable Supply Chain Management in IT',
    ],
  },
  {
    trackTitle: 'Track 4: Data Mining and Knowledge Discovery',
    subpoints: [
      'Advanced Techniques in Pattern Recognition',
      'Scalable Algorithms for Big Data Mining',
      'Anomaly Detection and Outlier Mining',
      'Text Mining and Natural Language Processing',
      'Graph Mining and Network Analysis',
      'Mining Unstructured and Semi-Structured Data',
      'Association Rules and Frequent Pattern Mining',
      'Time Series Analysis and Forecasting',
      'Web Mining and Social Media Analytics',
      'Spatial and Temporal Data Mining',
      'Data Mining for Cybersecurity and Fraud Detection',
      'Ethics and Privacy in Data Mining',
      'Knowledge Representation and Ontology Learning',
      'Interactive Data Mining and Visual Analytics',
      'Applications of Data Mining in Healthcare and Bioinformatics',
    ],
  },
  {
    trackTitle: 'Track 5: Big Data Engineering',
    subpoints: [
      'Distributed Systems for Big Data Processing',
      'Data Storage and Management in Big Data Systems',
      'Big Data Integration and Interoperability',
      'Real-Time Data Streaming and Processing',
      'Scalable Data Architectures and Infrastructures',
      'Big Data Analytics and Visualization',
      'Data Quality and Cleaning in Large-Scale Systems',
      'Security and Privacy in Big Data',
      'Cloud-Based Big Data Solutions',
      'High-Performance Computing for Big Data',
      'Machine Learning at Scale in Big Data',
      'Big Data in the Internet of Things (IoT)',
      'Energy-Efficient Big Data Solutions',
      'Data Governance and Compliance in Big Data',
      'Emerging Technologies and Trends in Big Data Engineering',
    ],
  },
  {
    trackTitle: 'Track 6: Next Gen Cloud Computing Solutions',
    subpoints: [
      'Serverless Computing and Function-as-a-Service (FaaS)',
      'Edge Computing and Cloud-Edge Integration',
      'Hybrid Cloud Architectures and Multi-Cloud Strategies',
      'Cloud-Native Application Development',
      'AI and Machine Learning in Cloud Computing',
      'Cloud Security and Zero Trust Architectures',
      'Cloud Automation and Infrastructure as Code (IaC)',
      'High-Performance Computing (HPC) in the Cloud',
      'Cloud-Based DevOps and Continuous Integration/Continuous Deployment (CI/CD)',
      'Sustainable and Green Cloud Solutions',
      'Quantum Computing in the Cloud',
      'Blockchain and Distributed Ledger Technologies in the Cloud',
      'Cloud Solutions for IoT and Smart Devices',
    ],
  },
  {
    trackTitle: 'Track 7: Applications and Future Directions of Large Language Models',
    subpoints: [
      'Architectures and Techniques for Training Large Language Models',
      'Fine-Tuning and Transfer Learning in Large Language Models',
      'Ethics, Bias, and Fairness in Large Language Models',
      'Applications of Large Language Models in Natural Language Processing',
      'Scaling Challenges and Solutions in Large Language Models',
      'Interpretability and Explainability in Large Language Models',
      'Multimodal Learning with Large Language Models',
      'Efficiency and Optimization in Training Large Language Models',
      'Real-World Deployments and Case Studies of Large Language Models',
      'Security and Privacy Concerns in Large Language Models',
      'Language Model Personalization and Customization',
      'Ethical Considerations in Large Language Model Development and Deployment',
      'Future Directions and Innovations in Large Language Models',
    ],
  },
  {
    trackTitle: 'Track 8: Security and Privacy Issues in Next Gen Computing',
    subpoints: [
      'Zero Trust Architectures and Next-Gen Security Models',
      'Security Challenges in Cloud Computing and Edge Networks',
      'Privacy-Preserving Machine Learning and AI',
      'Cybersecurity in Internet of Things (IoT) and Smart Devices',
      'Blockchain and Distributed Ledger Security',
      'Data Anonymization and Privacy Enhancing Technologies',
      'Threat Detection and Response in Modern IT Infrastructures',
      'Security in 5G and Next-Gen Mobile Networks',
      'Identity Management and Access Control in Next-Gen Systems',
      'Privacy and Security in Augmented and Virtual Reality',
      'Secure Software Development and DevSecOps',
      'Compliance and Regulatory Issues in Next-Gen Computing',
      'AI-Driven Security and Automated Threat Mitigation',
      'Emerging Threats and Security Trends in Next-Gen Computing',
    ],
  },
  {
    trackTitle: 'Track 9: Emerging Trends and Technologies',
    subpoints: [
      'Generative AI',
      'Quantum Computing',
      '5G and Beyond',
      'Blockchain and Decentralized Technologies',
      'Augmented Reality (AR) and Virtual Reality (VR)',
      'Next-Generation Cybersecurity Solutions',
      'Human-Computer Interaction in Emerging Technologies',
      'Autonomous Systems and Robotics',
      'Edge Computing and IoT Integration',
      'Smart Cities and Urban Technologies',
      'Digital Twins and Simulation Technologies',
      'Wearable Technology and Health Monitoring',
      'Space Technology and Exploration',
    ],
  },
  {
    trackTitle: 'Track 10: Digital Transformation, Innovation, and Interoperability',
    subpoints: [
      'Strategies for Successful Digital Transformation',
      'Innovation in Digital Business Models',
      'Interoperability Standards and Frameworks',
      'E-Government Strategies and Best Practices',
      'Citizen-Centric Digital Services and Engagement',
      'Data Governance and Open Data Initiatives',
      'Cloud Computing in Public Sector Transformation',
      'Digital Identity and Access Management for Citizens',
      'AI and Analytics for Public Policy Decision Making',
      'Cybersecurity in Government Digital Initiatives',
      'Interoperability Between Government Agencies',
      'Smart Cities: Integrating Technology into Urban Governance',
      'Blockchain Applications for Transparency and Accountability',
      'Digital Literacy and Skills Development in Public Services',
      'Innovative Funding Models for Digital Initiatives',
    ],
  },
];


const Tracks = () => {
    const [openTrackIndex, setOpenTrackIndex] = useState(null);

    // Function to toggle the open/close state
    const toggleTrack = (index) => {
      setOpenTrackIndex(openTrackIndex === index ? null : index);
    };

  return (
    <div>
       <section className="flex items-center justify-center w-full px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl w-full flex justify-center items-center ">
          <h2 className="md:text-4xl text-2xl text center font-bold leading-tight text-black sm:text-4xl ">
            Conference Tracks
          </h2>
          
        </div>
        <p className='mt-6 mx-8 text-justify sm:mx-20'>The conference invites high-quality, original, and previously unpublished papers on topics related advancements 
          in next-generation information systems. Areas of interest for submissions include, but are not limited to, the following:</p>
        <div className="mx-4 sm:mx-auto  mt-8 max-w-3xl space-y-4 md:mt-16">
          {tracksData.map((track, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                onClick={() => toggleTrack(index)}
              >
                <span className="text-lg font-semibold text-black">{track.trackTitle}</span>
                {openTrackIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openTrackIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <ul className="list-disc list-inside text-gray-500">
                    {track.subpoints.map((subpoint, subIndex) => (
                      <li key={subIndex}>{subpoint}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Tracks
