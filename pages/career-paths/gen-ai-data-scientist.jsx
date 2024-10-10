import Head from 'next/head';
import Link from 'next/link';

export default function DataScientist() {
  return (
    <>
      <Head>
        <title>Data Scientist | Bright-Mind AI</title>
        <meta name="description" content="Learn in-demand data analytics skills with our Data Analyst Associate course. Enroll today to gain practical, marketable data skills." />
      </Head>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl mt-8 text-center bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-extrabold">Data Scietist with LLM Career Path</h1>
        <p className="mt-4 bg-gradient-to-r from-white to-purple-100 rounded-lg text-lg text-center text-gray-700 max-w-4xl mx-auto">
          Learn in-demand skills like statistical analysis, Python, regression models, and
          machine learning in less than 6 months. Enroll today.
        </p>

        <h2 className="text-2xl font-bold mt-6">What you'll learn</h2>
        <ul className="list-disc ml-8 mt-2">
          <li>Explore the roles of data professionals within an organization</li>
          <li>Create data visualizations and apply statistical methods to investigate data</li>
          <li>Build regression and machine learning models to analyze and interpret data</li>
          <li>Communicate insights from data analysis to stakeholders</li>
        </ul>

        {/* Other sections like "Outcomes", "Courses", and "Testimonials" */}

        <div className="mt-8">
          <Link href="/ContactUs" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Enroll Now
            
          </Link>
        </div>
      </div>
    </>
  );
}
