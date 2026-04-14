import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { useCoursesContext } from "../context/courses_context";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import parse from "html-react-parser";

function Archive() {
  const { courses } = useCoursesContext();
  const [loading, setLoading] = useState(true);

  const filteredCourses = courses.filter((course) => course.archieve === true);

  const truncateText = (text, wordLimit) =>
    text.split(" ").slice(0, wordLimit).join(" ") +
    (text.split(" ").length > wordLimit ? "..." : "");

  useEffect(() => {
    if (courses && courses.length > 0) {
      setLoading(false);
    }
  }, [courses]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval height={50} width={50} color="#4fa94d" visible={true} />
      </div>
    );
  }

  function convertMinutes(minutes) {
    if (!minutes) return "-";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (minutes <= 60) {
      return `${minutes} min`;
    }
    return `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes} min`;
  }

  if (filteredCourses.length === 0) {
    return (
      <Layout>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Hi there!
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                The webinar replay will be available shortly. Stay tuned!
              </p>
              <Link
                to="/"
                className="inline-flex text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="mb-4 inline-block bg-purple-50 text-purple-700 border border-purple-200 rounded px-3 py-1 font-semibold">
              Webinar Archive
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Past
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}
                Webinars
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore recordings of previous sessions you may have missed
            </p>
          </div>

          {/* Archive Course Grid */}
          <div className="space-y-8">
            {filteredCourses.map((course) => (
              <div
                key={course.courseID}
                className="overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group rounded-3xl"
              >
                <div className="p-8">
                  <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Instructor Image */}
                    <div className="lg:col-span-1">
                      <img
                        src={course.imageSrc}
                        alt={course.instructor}
                        style={{
                          width: "160px",
                          height: "160px",
                          objectFit: "cover",
                        }}
                        className="rounded-2xl shadow-lg mx-auto lg:mx-0"
                      />
                      <div className="text-center lg:text-left mt-4">
                        <p className="font-medium text-gray-900">
                          {course.instructor}
                        </p>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="lg:col-span-3 space-y-4">
                      <div>
                        <Link to={`/archive/${course.courseID}`}>
                          <h3 className="text-2xl lg:text-3xl font-bold text-purple-600 hover:text-purple-700 transition-colors group-hover:text-purple-700 mb-3">
                            {course.title}
                          </h3>
                        </Link>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <span className="h-5 w-4">⏰</span>
                            <span>
                              Duration: {convertMinutes(course.duration)}
                            </span>
                          </div>
                        </div>
                        <p className="mb-4 mb-md-0">
                          {course?.description
                            ? parse(truncateText(course.description, 48))
                            : null}
                        </p>
                      </div>
                    </div>

                    {/* Price + CTA */}
                    <div className="lg:col-span-1 text-center lg:text-right space-y-6">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {course.discountedPrice ? (
                          <>
                            ${course.discountedPrice}
                            <span className="ml-2 text-red-500 text-base line-through">
                              $
                              {course?.Pricings?.[0]?.price || course.price}
                            </span>
                          </>
                        ) : (
                          <>${course?.Pricings?.[0]?.price || course.price}</>
                        )}
                      </div>

                      <Link to={`/archive/${course.courseID}`}>
                        <button className="mt-10 w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Archive;
