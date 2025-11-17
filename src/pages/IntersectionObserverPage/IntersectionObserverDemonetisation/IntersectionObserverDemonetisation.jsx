import { useEffect, useRef } from "react";
import CodeDisplay from "../../../components/reusable/CodeDisplay/CodeDisplay";
import Navbar from "../../../components/reusable/Navbar/Navbar";

let code = `import { useEffect, useRef } from "react";
import Navbar from "../../../components/reusable/Navbar/Navbar";

const IntersectionObserverDemonetisation = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting) {
        console.log("loader observer is visiable");
        console.log("Do, What you need to do");
      } else {
        console.log("loader observer is not visiable");
      }
    };
    const observer = new IntersectionObserver(onIntersection);

    if (observer && circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container my-[60px]">
        <div className="flex flex-col items-center justify-between h-[calc(100vh+250px)] section-card">
          <p>In below there is a circle with Intersection Observer</p>
          <div
            className="bg-green-500 w-[200px] h-[200px] aspect-square rounded-full"
            ref={circleRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default IntersectionObserverDemonetisation;
`;
const IntersectionObserverDemonetisation = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting) {
        console.log("loader observer is visiable");
        console.log("Do, What you need to do");
      } else {
        console.log("loader observer is not visiable");
      }
    };
    const observer = new IntersectionObserver(onIntersection);

    if (observer && circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container my-[60px]">
        <div className="section-card my-[60px]">
          <CodeDisplay codeString={code} />
        </div>
        <div className="flex flex-col items-center justify-between h-[calc(100vh+250px)] section-card">
          <p>In below there is a circle with Intersection Observer</p>
          <div
            className="bg-green-500 w-[200px] h-[200px] aspect-square rounded-full"
            ref={circleRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default IntersectionObserverDemonetisation;
