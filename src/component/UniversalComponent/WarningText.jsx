import React from "react";
import { Info } from "lucide-react";

const WarningText = () => {
  return (
    <aside className="notice" role="note">
      <Info size={20} aria-hidden="true" />
      <p>
        সব ধরণের ট্রেড করতে হলে আমাদের আগে লং টাইমফ্রেম দেখে ফিল্টার করে নিতে
        হবে, তার পর আমরা ফিল্টারের দিকের সাথে সব ধরনের ট্রেড + ট্রেপ ব্যাবহার
        করবো।
      </p>
    </aside>
  );
};

export default WarningText;
