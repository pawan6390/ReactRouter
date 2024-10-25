import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://dme2wmiz2suov.cloudfront.net/websitebuilder/679/utils/1917979-3.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            We just don’t train,
                            We transform the careers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Innomatics Research Labs is a pioneer in “Transforming Careers and Lives” of individuals in the Digital Space by catering advanced training on NASSCOM Future skills prime Certified Data Science, Python, Predictive Analytics Modeler, Machine Learning, Artificial Intelligence (AI), Full-stack web development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, Digital Marketing, and Career Launching program for students who are willing to showcase their skills in the competitive job market with valuable credentials, and also can complete courses with a certificate.
                        </p>
                        <p className="mt-4 text-gray-600">
                        We have trainers hailing from the fortune companies who understand the real-time business cases and can train individuals based on them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}