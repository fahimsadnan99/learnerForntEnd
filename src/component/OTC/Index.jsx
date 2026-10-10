import React from "react";
import LessonIndex from "../UniversalComponent/LessonIndex";
import { otcLessons } from "../../data/otcLessons";

const Index = () => {
  return (
    <LessonIndex
      title="Master Class (OTC)"
      intro="ক্যান্ডেল, অর্ডারফ্লো, ট্রেপ, লিকুইডিটি ও এরিয়া — ধাপে ধাপে বিস্তারিত পাঠ।"
      lessons={otcLessons}
    />
  );
};

export default Index;
