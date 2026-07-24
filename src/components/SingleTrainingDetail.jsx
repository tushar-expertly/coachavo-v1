import { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  ArrowPathIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  GiftIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Layout from "./layout";
import { useParams } from "react-router-dom";
import { useCoursesContext } from "../context/courses_context";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { Oval } from "react-loader-spinner";
import parse from "html-react-parser";

const SingleTrainingDetail = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();
  const [loading, setLoading] = useState(true);
  const [selectedPricings, setSelectedPricings] = useState([]);
  // const [openInfoId, setOpenInfoId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetchSingleCourse(id);
      setLoading(false);
    };
    fetchData();
  }, [id, fetchSingleCourse]);

  // useEffect(() => {
  //   if (single_course?.Pricings?.length) {
  //     setSelectedPricings([single_course.Pricings[0]]);
  //   }
  // }, [single_course]);
  useEffect(() => {
    if (single_course?.Pricings?.length) {
      const isPastWebinar = new Date(single_course.webinarDate) < new Date();

      if (isPastWebinar) {
        const accessOptions = single_course.Pricings.filter(
          (pricing) =>
            pricing.sessionType === "Recorded session" ||
            pricing.sessionType === "Transcript" ||
            pricing.sessionType === "Recorded Plus Transcript session",
        );

        if (accessOptions.length > 0) {
          setSelectedPricings([accessOptions[0]]); // ✅ select first valid option
        }
      } else {
        setSelectedPricings([single_course.Pricings[0]]); // ✅ original behavior
      }
    }
  }, [single_course]);
  const handlePricingToggle = (pricing) => {
    setSelectedPricings((prev) => {
      const exists = prev.find((p) => p.id === pricing.id);

      if (exists) {
        return prev.filter((p) => p.id !== pricing.id);
      } else {
        return [...prev, pricing];
      }
    });
  };
  const totalPrice = selectedPricings.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0,
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <Oval
            height={50}
            width={50}
            color="#2dd4bf"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#134e4a"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          <p className="text-teal-200/70 text-sm tracking-wide uppercase">
            Loading session
          </p>
        </div>
      </div>
    );
  }

  const {
    courseID,
    title,
    instructor,
    // duration,
    // price,
    discountedPrice,
    description,
    what_you_will_learn,
    // content,
    imageSrc,
    Pricings = [],
    webinarDate,
    duration,
    areas_covered,
    who_will_benefit,
    instructor_profile,
    why_register,
    background,
    // target_companies,
    // target_association,
  } = single_course;
  console.log("🚀 ~ SingleTrainingDetail ~ Pricings:", Pricings);

  const dateTime = new Date(webinarDate);

  const webinarDateUTC = new Date(webinarDate);
  const isPastWebinar = new Date(webinarDate) < new Date();
  const accessOptions = Pricings.filter(
    (pricing) =>
      pricing.sessionType === "Recorded session" ||
      pricing.sessionType === "Transcript" ||
      pricing.sessionType === "Recorded Plus Transcript session",
  );

  const day = webinarDateUTC.getUTCDate();
  const monthYear = webinarDateUTC.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const weekday = webinarDateUTC.toLocaleString("en-US", {
    weekday: "long",
    timeZone: "UTC",
  });
  const formattedTimeEST = dateTime.toLocaleString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedTimePST = dateTime.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  function convertMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (minutes <= 60) {
      return `${minutes} min`;
    }

    return `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes} min`;
  }
  const visiblePricings = showMore
    ? Pricings.slice(0, 5)
    : Pricings.slice(0, 2);

  const contentSections = [
    {
      key: "description",
      label: "Overview",
      content: description,
      icon: DocumentTextIcon,
    },
    {
      key: "why_register",
      label: "Why Register",
      content: why_register,
      icon: SparklesIcon,
    },
    {
      key: "what_you_will_learn",
      label: "Why Should You Attend",
      content: what_you_will_learn,
      icon: AcademicCapIcon,
    },
    {
      key: "areas_covered",
      label: "Areas Covered",
      content: areas_covered,
      icon: CheckCircleIcon,
    },
    {
      key: "who_will_benefit",
      label: "Who Will Benefit",
      content: who_will_benefit,
      icon: UserIcon,
    },
    {
      key: "instructor_profile",
      label: "Instructor Profile",
      content: instructor_profile,
      icon: AcademicCapIcon,
    },
    {
      key: "background",
      label: "Background",
      content: background,
      icon: DocumentTextIcon,
    },
  ].filter((section) => section.content);

  const PricingOption = ({ pricing, isChecked, onToggle }) => (
    <label
      className={`group flex items-start gap-3 p-3.5 rounded-xl cursor-pointer border transition-all duration-200 ${
        isChecked
          ? "border-teal-500/60 bg-teal-50/80 shadow-sm shadow-teal-900/5"
          : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/80"
      }`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
        className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
      />
      <span className="flex-1 text-sm leading-snug text-slate-700 group-hover:text-slate-900">
        <span className="font-medium">{pricing.sessionType}</span>
        <span className="block mt-0.5 text-teal-700 font-semibold tabular-nums">
          ${pricing.price}
        </span>
      </span>
    </label>
  );

  const PriceSummary = () => (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 p-6 text-white">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal-400/20 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-amber-400/10 blur-2xl"
        aria-hidden
      />
      <p className="text-[11px] uppercase tracking-[0.2em] text-teal-200/70 mb-3">
        Your total
      </p>
      <p className="text-sm text-amber-300/90 line-through decoration-amber-300/50">
        Was: $
        {totalPrice != null && totalPrice > 0
          ? (totalPrice + selectedPricings.length * 49).toFixed(2)
          : "00.00"}
      </p>
      <p className="mt-1 text-4xl font-bold tracking-tight tabular-nums">
        $
        {totalPrice != null && totalPrice > 0
          ? totalPrice.toFixed(2)
          : "00.00"}
      </p>
      <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-200 ring-1 ring-amber-400/30">
        <GiftIcon className="h-3.5 w-3.5" />
        You save ${selectedPricings.length * 49}
      </p>
    </div>
  );

  const AddToCartButton = () => (
    <Link
      to={selectedPricings.length === 0 ? "#" : "/cart"}
      className={`group relative w-full flex justify-center items-center gap-2 py-3.5 px-4 text-sm font-semibold rounded-xl text-white transition-all duration-200
    ${
      selectedPricings.length === 0
        ? "bg-slate-400 cursor-not-allowed pointer-events-none"
        : "bg-teal-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 shadow-lg shadow-teal-900/20 hover:shadow-teal-900/30 hover:-translate-y-0.5"
    }
  `}
      onClick={(e) => {
        if (selectedPricings.length === 0) {
          e.preventDefault();
          return;
        }
        addToCart(
          courseID,
          imageSrc,
          title,
          instructor,
          selectedPricings.length > 0 ? totalPrice : discountedPrice,
          selectedPricings,
        );
      }}
    >
      Add to Cart
      {selectedPricings.length > 0 && (
        <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white/20 px-1.5 text-[11px] font-bold">
          {selectedPricings.length}
        </span>
      )}
    </Link>
  );

  const SectionHeading = ({ icon: Icon, children }) => (
    <div className="flex items-center gap-3 mb-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-700 ring-1 ring-teal-100">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight">
        {children}
      </h2>
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-[#eef2f1] relative overflow-hidden">
        {/* Atmospheric background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(15,118,110,0.18) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-teal-300/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-[40%] -left-32 h-[360px] w-[360px] rounded-full bg-slate-400/20 blur-3xl"
          aria-hidden
        />

        {/* Hero */}
        <header className="relative">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 md:pt-10 pb-8 md:pb-12">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-2xl shadow-slate-900/20">
              <div className="absolute inset-0">
                <img
                  src={imageSrc}
                  alt={title}
                  className="h-full w-full object-cover object-top opacity-40 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-teal-950/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
                <div className="lg:col-span-8 flex flex-col justify-end">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ${
                        isPastWebinar
                          ? "bg-amber-400/15 text-amber-200 ring-amber-400/30"
                          : "bg-teal-400/15 text-teal-200 ring-teal-400/30"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isPastWebinar ? "bg-amber-300" : "bg-teal-300 animate-pulse"
                        }`}
                      />
                      {isPastWebinar ? "On-Demand Access" : "Live Webinar"}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight max-w-3xl">
                    {title}
                  </h1>

                  <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 px-4 py-3 min-w-[160px]">
                      <CalendarDaysIcon className="h-6 w-6 text-teal-300 shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">
                          Date
                        </p>
                        <p className="text-white font-semibold leading-tight">
                          <span className="text-2xl tabular-nums mr-1.5">
                            {day}
                          </span>
                          <span className="text-sm">{monthYear}</span>
                        </p>
                        <p className="text-xs text-slate-300">{weekday}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 px-4 py-3 min-w-[160px]">
                      <ClockIcon className="h-6 w-6 text-teal-300 shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">
                          Time & Duration
                        </p>
                        <p className="text-sm text-white font-medium leading-snug">
                          {formattedTimeEST} EST
                          <span className="text-slate-500 mx-1">/</span>
                          {formattedTimePST} PST
                        </p>
                        <p className="text-xs text-slate-300 mt-0.5">
                          {duration ? convertMinutes(duration) : null}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 px-4 py-3 min-w-[160px]">
                      <UserIcon className="h-6 w-6 text-teal-300 shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">
                          Created by
                        </p>
                        <p className="text-sm text-white font-medium leading-snug">
                          {instructor?.replace(/"/g, "")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex items-end justify-end">
                  <div className="hidden sm:block w-full max-w-xs overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-xl shadow-black/40">
                    <img
                      src={imageSrc}
                      alt={title}
                      className="aspect-[4/3] w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Content column */}
            <div className="lg:col-span-8 space-y-5">
              {contentSections.map((section, index) => (
                <article
                  key={section.key}
                  className="group relative rounded-2xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm shadow-slate-900/5 ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-md hover:ring-teal-200/50"
                  style={{
                    animation: `fadeSlideUp 0.45s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-teal-500 to-teal-300 opacity-80" />
                  <div className="pl-2">
                    <SectionHeading icon={section.icon}>
                      {section.label}
                    </SectionHeading>
                    <div className="prose prose-slate prose-sm sm:prose-base max-w-none text-slate-600 leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5">
                      {parse(section.content)}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Purchase rail */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-6 space-y-4">
                {isPastWebinar ? (
                  <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-5 sm:p-6 shadow-lg shadow-slate-900/8 ring-1 ring-slate-200/70 space-y-5">
                    <PriceSummary />
                    <AddToCartButton />

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowPathIcon className="h-4 w-4 text-teal-600" />
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wide">
                          Access Options
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {accessOptions.map((pricing) => {
                          const isChecked = selectedPricings.some(
                            (p) => p.id === pricing.id,
                          );

                          return (
                            <PricingOption
                              key={pricing.id}
                              pricing={pricing}
                              isChecked={isChecked}
                              onToggle={() => handlePricingToggle(pricing)}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-5 sm:p-6 shadow-lg shadow-slate-900/8 ring-1 ring-slate-200/70 space-y-5">
                      <PriceSummary />
                      <AddToCartButton />

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                          </span>
                          <h3 className="text-sm font-semibold text-slate-900 tracking-wide">
                            Live Webinar
                          </h3>
                        </div>

                        <div className="space-y-2">
                          {visiblePricings.map((pricing) => {
                            const isChecked = selectedPricings.some(
                              (p) => p.id === pricing.id,
                            );

                            // const isInfoOpen = openInfoId === pricing.id;

                            return (
                              <div
                                key={pricing.id}
                                className="rounded-md overflow-hidden transition-all"
                              >
                                <PricingOption
                                  pricing={pricing}
                                  isChecked={isChecked}
                                  onToggle={() => handlePricingToggle(pricing)}
                                />

                                {/* <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenInfoId(isInfoOpen ? null : pricing.id);
                        }}
                        className="w-5 h-5 flex items-center justify-center rounded-full border text-blue-600 text-xs font-bold hover:bg-blue-50"
                      >
                        i
                      </button> */}

                                {/* <div
                      className={`transition-all duration-300 ease-in-out ${
                        isInfoOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden border-t`}
                    >
                      <ul className="text-sm text-gray-700 p-4 space-y-2 list-disc list-inside bg-gray-50">
                        <li>Access Credentials will be shared via email</li>
                        <li>
                          Credentials available the day before or day of the
                          webinar
                        </li>
                        <li>Add/Edit attendees from My Account</li>
                        <li>Certificate of Participation provided</li>
                      </ul>
                    </div> */}
                              </div>
                            );
                          })}
                        </div>

                        {Pricings.length > 2 && (
                          <button
                            onClick={() => setShowMore(!showMore)}
                            className="mt-3 text-teal-700 font-medium flex items-center gap-1.5 text-sm group hover:text-teal-600 transition-colors"
                          >
                            <span className="underline underline-offset-2 decoration-teal-300 group-hover:decoration-teal-500">
                              {showMore ? "Less Attendees" : "More Attendees"}
                            </span>
                            <span
                              className={`transform transition-transform duration-200 group-hover:text-teal-600 ${
                                showMore ? "rotate-180" : ""
                              }`}
                            >
                              ▾
                            </span>
                          </button>
                        )}
                      </div>
                      {/* <div>
              <h3 className="font-semibold text-center text-blue-700 text-lg mb-3 border border-blue-300 bg-[#f9f9f9] px-4 py-2">
                Live Webinar
              </h3>

              {Pricings?.slice(0, 5).map((pricing) => {
                const isChecked = selectedPricings.some(
                  (p) => p.id === pricing.id
                );

                return (
                  <label
                    key={pricing.id}
                    className="flex items-center justify-between border p-3 rounded-md mt-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handlePricingToggle(pricing)}
                      />
                      <span>
                        {pricing.sessionType} - ${pricing.price}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div> */}

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <ArrowPathIcon className="h-4 w-4 text-teal-600" />
                          <h3 className="text-sm font-semibold text-slate-900 tracking-wide">
                            On-Demand
                          </h3>
                        </div>

                        <div className="space-y-2">
                          {Pricings?.filter(
                            (pricing) =>
                              pricing.sessionType === "Recorded session" ||
                              pricing.sessionType === "Transcript",
                          ).map((pricing) => {
                            const isChecked = selectedPricings.some(
                              (p) => p.id === pricing.id,
                            );

                            return (
                              <PricingOption
                                key={pricing.id}
                                pricing={pricing}
                                isChecked={isChecked}
                                onToggle={() => handlePricingToggle(pricing)}
                              />
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <GiftIcon className="h-4 w-4 text-amber-600" />
                          <h3 className="text-sm font-semibold text-slate-900 tracking-wide">
                            Value Packs
                          </h3>
                        </div>

                        <div className="space-y-2">
                          {Pricings?.filter(
                            (pricing) =>
                              pricing.sessionType ===
                                "Live Plus Recorded session" ||
                              pricing.sessionType ===
                                "Live Plus Transcript session" ||
                              pricing.sessionType ===
                                "Recorded Plus Transcript session" ||
                              pricing.sessionType ===
                                "Group Session For 10 Attendees" ||
                              pricing.sessionType ===
                                "Group Session For More Than 10 Attendees",
                          ).map((pricing) => {
                            const isChecked = selectedPricings.some(
                              (p) => p.id === pricing.id,
                            );

                            return (
                              <PricingOption
                                key={pricing.id}
                                pricing={pricing}
                                isChecked={isChecked}
                                onToggle={() => handlePricingToggle(pricing)}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>

        <style>{`
          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default SingleTrainingDetail;
