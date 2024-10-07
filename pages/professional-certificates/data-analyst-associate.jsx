import Head from 'next/head';
import Link from 'next/link';

export default function DataAnalystAssociate() {
  return (
    <>
      <Head>
        <title>Data Analyst Associate | BrightMind AI</title>
        <meta name="description" content="Learn in-demand data analytics skills with our Data Analyst Associate course. Enroll today to gain practical, marketable data skills." />
      </Head>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8">Data Analytics Professional Certificate</h1>
        <p className="mt-2 text-lg">
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
          <Link href="/enrollment"           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Enroll Now
            
          </Link>
        </div>
      </div>
    </>
  );
}
