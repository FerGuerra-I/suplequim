// config/site.ts

export const siteConfig = {
  name: "Peruvian Health Clone",
  description: "Venta del mejor aceite de coco y productos naturales.",
  whatsapp: {
    // Contacto de Sofia S. para ventas al por menor 
    phone: "51982921406", 
    message: "Hola, vengo desde su web y necesito información.",
  },
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Alimentos", href: "/categoria/alimentos" }, // 
    { label: "Cuidado Personal", href: "/categoria/cuidado-personal" }, // 
  ],
  sampleProducts: [
    {
      id: "1",
      name: "Aceite de Coco Virgen Orgánico 4L", // 
      price: 240.00, // 
      rating: 5.0, // 
      reviews: 1, // 
      imageUrl: "/images/coco-4l.jpg", // Placeholder
      href: "/producto/aceite-coco-virgen-4l"
    },
    {
      id: "2",
      name: "Crema de Aceite de Coco & Argán 212ml", // 
      price: 45.00, // 
      rating: 5.0, // 
      reviews: 3, // 
      imageUrl: "/images/crema-argan.jpg", // Placeholder
      href: "/producto/crema-argan"
    }
  ]
};