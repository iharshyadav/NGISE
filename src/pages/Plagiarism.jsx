
const PlagiarismPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl ml-4 font-bold mb-4">Plagiarism Policy</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ul className="list-disc pl-5 space-y-4 text-lg">
          <li>
            Authors are invited to submit original papers based on the conference theme for presentation in the conference. Authors should ensure that the paper begins with a title, a short abstract, a list of keywords, followed by the main content. Simultaneous submissions to other conferences/journals are not allowed.
          </li>
          <li>
            All papers must adhere to IEEE formatting instructions.
          </li>
          <li>
            The total length of the paper must not exceed six A4 size pages, including bibliography and appendices.
          </li>
          <li>
            All the papers will be submitted through the online paper submission process.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlagiarismPolicy;
