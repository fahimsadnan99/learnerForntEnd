import React from "react";
import LessonIndex from "../UniversalComponent/LessonIndex";
import { priceActionLessons } from "../../data/priceActionLessons";

const Index = () => {
  return (
    <LessonIndex
      title="Price Action"
      intro="ক্যান্ডেল, লেভেল, জোন ও চার্ট প্যাটার্ন — দাম কীভাবে চলে তার ভিত্তি।"
      lessons={priceActionLessons}
    />
  );
};

export default Index;
