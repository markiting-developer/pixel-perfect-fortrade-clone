
import ParallaxElement from "./ParallaxElement";

const FormHeader = () => {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="mb-4 sm:mb-6">
        <p className="text-gray-400 text-xs sm:text-sm font-normal mb-2 sm:mb-3">Trusted by</p>
        <div className="flex items-baseline gap-2">
          <ParallaxElement intensity={0.5}>
            <img src="/lovable-uploads/208044a7-6b78-4781-9c35-2f68a2dafd9c.png" alt="FX" className="h-12 sm:h-16" />
          </ParallaxElement>
          <span className="text-white text-xl sm:text-2xl font-bold leading-none">Critics</span>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
