import Footer from "./Footer";

const Services = () => {
    const services = [
      {
        title: "Diagnostic Tests",
        description:
          "Complete our scientifically designed tests to assess your personality, aptitude, and interests.",
        icon: "📝", // Replace with an actual image if needed
      },
      {
        title: "AI-Driven Career Matcher",
        description:
          "Receive career recommendations based on your skills and current market trends.",
        icon: "🤖", // Replace with an actual image if needed
      },
      {
        title: "Explore Resources and Guidance",
        description:
          "Access curated content, certified courses, and development tools to achieve your career goals.",
        icon: "📚", // Replace with an actual image if needed
      },
      {
        title: "Get Assistance Anytime",
        description:
          "Our chatbot are always available to resolve your queries and provide advice.",
        icon: "💡", // Replace with an actual image if needed
      },
      
      
    ];
  
    return (
        <>
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-8">
            Services We Provide!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default Services;
  