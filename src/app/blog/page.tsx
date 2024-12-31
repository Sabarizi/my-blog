import Link from "next/link";

const posts = [
  {
    id: "masjid-al-quba",
    title: "Masjid Al Quba",
    description: "The First Masjid built by Our Beloved Prophet Muhammad PBUH",
    image: "/quba.jpg",
  },
  {
    id: "masjid-al-nabi",
    title: "Masjid Al Nabvi",
    description: "The history of Masjid Al-Nabvi of Our Beloved Prophet Muhammad PBUH",
    image: "/masjid.jpg",
  },
  {
    id: "ghar-e-hira",
    title: "Ghaar E Hira",
    description: "The First revelation of Our Beloved Prophet Muhammad PBUH",
    image: "/ghar.jpg",
  },
  {
    id: "masjid-e-aqsa",
    title: "Masjid Al Aqsa",
    description: "Al Masjid Al Aqsa was the first qibla in Islam",
    image: "/aqsa.jpeg",
  },
  {
    id: "mount-uhud",
    title: "Mount Uhud",
    description: "Mount Uhud is a mountain north of Medina, in the Hejazi region of Saudi Arabia. It is 1,077 m (3,533 ft) high and 7.5 km (4.7 miles) long.",
    image:"/Mount_Uhud.jpeg"
  },
  {
    id: "al-ghars-well",
    title: "The Well Of Ghars",
    description: "A historic water well in the city of Medina, Saudi Arabia. Traditionally it is believed that the prophet Muhammad drank from this well once.",
    image: "/ghars-well.jpg",
  },
];

const BlogList = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/blog/${post.id}`}>
              <div className="cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
