import {services}  from "../ServicesData/ServicesData2";
import { useParams } from "react-router-dom";

export default function ServicesSubPage() {
  const { id } = useParams();
//   const { id } = router.query;

  const service = services.find(s => s.id === id);

  if (!service) return <p>Service not found</p>;

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <h1 className="text-4xl text-white">{service.title}</h1>
      </div>

      {/* Short Description */}
      <section className="p-6">
        <p>{service.desc}</p>
      </section>

      {/* Detailed Sections */}
      <section className="p-6">
        {service.detailed.points.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">{item.heading}</h3>
            <p>{item.content}</p>
          </div>
        ))}

        <h2 className="text-2xl mt-8">Why Choose Us?</h2>
        <ul className="list-disc pl-6">
          {service.detailed.whyChooseUs.map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
