
import Header from "../components/Header";
import SignupForm from "../components/SignupForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/lovable-uploads/9b6e9f2f-8840-4df5-8c7c-48de1a3bebaa.png')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/70" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[calc(100vh-200px)]">
            {/* Left side - could add marketing content here later */}
            <div className="hidden lg:block lg:w-1/2">
              {/* Marketing content space */}
            </div>
            
            {/* Right side - Signup Form */}
            <div className="w-full lg:w-auto lg:max-w-md lg:ml-auto">
              <SignupForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
