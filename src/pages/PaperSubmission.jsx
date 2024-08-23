import React from "react";

const PaperSubmission = () => {
  return (
    <div className="mx-4 sm:mx-7 lg:mx-40 overflow-x-hidden">
      <div className="bg-orange-200 box-border rounded-2xl p-4 sm:p-5 my-7 ">
        <p className="my-4 text-3xl lg:text-4xl font-bold hover:underline mb-7">
          Conference Track
        </p>
        <ol className="">
          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-1: Information System Engineering
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>Systems Analysis and Design</li>
              <li>Database Systems</li>
              <li>Information Systems Security</li>
              <li>Project Management</li>
              <li>Enterprise Information Systems</li>
            </ul>
          </li>

          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-2: Artificial Intelligence
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>Federated Learning</li>
              <li>Natural language Processing</li>
              <li>Optimization Algorithms</li>
              <li>Reinforcement Learning</li>
              <li>Generative Model</li>
            </ul>
          </li>

          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-3: Green and Sustainable IT Systems and Algorithms
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>Energy Efficiency and Sustainability in Green IoT</li>
              <li>Bio-Engineering for Sustainable Development</li>
              <li>Energy aware Algorithms and Software</li>
              <li>Green Software Development practices</li>
              <li>Circular Economy and IT Systems</li>
            </ul>
          </li>

          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-4: Data Mining and Knowledge Discovery
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>Feature Engineering</li>
              <li>Real-Time Data Processing</li>
              <li>Sequential Pattern Mining</li>
              <li>Anomaly Detection</li>
              <li>Text Mining </li>
            </ul>
          </li>

          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-5: Big Data Engineering
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>Distributed Computing Frameworks</li>
              <li>Data Ingestion and ETL (Extract, Transform, Load)</li>
              <li>Data Visualization and Business Intelligence (BI)</li>
              <li>Edge Computing and IoT Data Processing</li>
              <li>Data Governance and Compliance</li>
            </ul>
          </li>

          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-6: Next Gen Cloud Computing
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>Serverless Computing for Big Data</li>
              <li>Scalable Storage Solutions</li>
              <li>Data Lakes and Lakehouses on Cloud</li>
              <li>Cloud-Native Machine Learning and AI Services</li>
              <li>Data Security and Compliance in Cloud Environments</li>
            </ul>
          </li>

          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-7: GenAI Data Storage and Retrieval Techniques
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>In-Memory Databases and Caching</li>
              <li>Temporal and Versioned Data Management</li>
              <li>Database Partitioning and Sharding</li>
              <li>Hybrid Storage Architectures</li>
              <li>Data Indexing Techniques</li>
            </ul>
          </li>

          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-8: Security and Privacy Issues in Next Gen Computing
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>Data Privacy and Security</li>
              <li>Regulatory and Legal Compliance</li>
              <li>Transparency and Accountability</li>
              <li>Ethical Use of Data</li>
              <li>Bias and Fairness</li>
            </ul>
          </li>

          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-9: Industry Applications and Case Studies
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>Healthcare and Medicine</li>
              <li>Finance and Banking</li>
              <li>Retail and E-commerce</li>
              <li>Manufacturing and Industry</li>
              <li>Transportation and Logistics</li>
            </ul>
          </li>

          <li className="mb-4">
            <h1 className="text-lg md:text-xl font-bold">
              Track-10: Emerging Trends and Technologies
            </h1>
            <ul className="list-disc pl-5 sm:pl-10">
              <li>Generative AI</li>
              <li>Quantum Computing</li>
              <li>5G and Beyond</li>
              <li>Blockchain and Decentralized Technologies</li>
              <li>Augmented Reality (AR) and Virtual Reality (VR)</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PaperSubmission;