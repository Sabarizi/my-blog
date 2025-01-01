"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const posts = [
  {
    id: "masjid-al-quba",
    title: "Masjid Al Quba",
    description:
      "The First Masjid built by Our Beloved Prophet Muhammad PBUH is Masjid Al Quba. It holds great significance in Islamic history as it was established during the migration to Madina. The mosque stands as a symbol of faith and unity among Muslims.",
    content: `Masjid Al Quba is known as the first mosque in Islam. The Prophet Muhammad (PBUH) personally participated in its construction upon his migration to Madina. It represents the foundational values of faith, community, and dedication to worship.

      The mosque was built with simple materials such as palm tree trunks for pillars, mud walls, and palm fronds for the roof. Despite its modest beginnings, it holds a prominent place in the hearts of Muslims around the world. Pilgrims visiting Madina often prioritize visiting Masjid Al Quba to experience its spiritual significance.

      It is also narrated that praying in Masjid Al Quba carries a reward equivalent to performing an Umrah. This tradition further enhances its status as a holy site. The mosque has undergone various renovations over centuries but has retained its historical essence.

      Visiting Masjid Al Quba allows one to connect deeply with the history of Islam, reflect on the life of the Prophet Muhammad (PBUH), and appreciate the unity and simplicity promoted by Islamic teachings.
      `,
    image: "/quba.jpg",
  },
  {
    id: "masjid-al-nabi",
    title: "Masjid Al Nabvi",
    description:
      "The Masjid of Our Beloved Prophet Muhammad PBUH is Masjid Al Quba. It holds great significance in Islamic history as it was established during the migration to Madina. The mosque stands as a symbol of faith and unity among Muslims.",
    content: `Horizon view of the Prophets Mosque, with the Green Dome far in the background. It is the second-holiest site in Islam, after the Great Mosque of Mecca. It is always open, regardless of date or time. The site was originally adjacent to Muhammad s house; the original mosque was an open-air building and served as a community center, a court, and a school as well.

The mosque is under the control of the Custodian of the Two Holy Mosques. The mosque is located in what was traditionally the center of Medina, with many hotels and old markets nearby. It is a major pilgrimage site. Many pilgrims who perform the Hajj go on to Medina to visit the mosque, due to its connection to Muhammad. The mosque has been extended over the years, the latest being in the mid 1990s. One of the most notable features of the site is the green dome over the centre of the mosque, where the tomb of Prophet Muhammad and early Islamic leaders Abu Bakr and Umar are located.

In order to finance the scholarly and educational activities in the Masjid al-Nabawi as well as the renovation and reconstruction projects, several foundations were started to be established in the Umayyad era, and they have been increasing in number since then.
      `,
    image: "/masjid.jpg",
  },
  {  id: "masjid-e-aqsa",
    title: "Masjid Al Aqsa",
    description: "Al Masjid Al Aqsa was the first qibla in Islam",
    content:`The History of Masjid Al Aqsa:
During the rule of either the Rashidun caliph Umar (ruled-634-644) or the Umayyad caliph Muawiya I (r. 661–680), a prayer house was constructed near the site of the mosque. The present-day mosque, located on the southern wall of the compound, was initially built by the fifth Umayyad caliph Abd al-Malik (r. 685–705) or his successor al-Walid I (r. 705–715), or possibly both, as a congregational mosque aligned with the Dome of the Rock. After an earthquake in 746, the mosque underwent reconstruction in 758 under the Abbasid caliph al-Mansur. Further expansions took place in 780 during the reign of Abbasid caliph al-Mahdi but suffered another devastation during the 1033 Jordan Rift Valley earthquake. It was subsequently rebuilt by the Fatimid caliph al-Zahir (r. 1021–1036). The present-day structure largely retains its 11th-century design.`,
    image: "/aqsa.jpeg",},
    {
      id: "ghar-e-hira",
      title: "Ghaar E Hira",
      description: "The First revelation of Our Beloved Prophet Muhammad PBUH",
      content:`The Cave of Hira was of minor significance before Islam, its name comes from hira (jewels). Taking 1750 walking steps to reach, it is about 3.7 m (12 ft) in length and 1.60 m (5 ft 3 in) in width.[2] It is at a height of 270 m (890 ft).[10] During the Hajj (pilgrimage), an estimated five thousand visitors climb to it daily to see the place where Prophet Muhammad is believed to have received the first revelation of the Quran on the Laylat al-Qadr (night of power) by the angel Jibreel (Gabriel).[10] Most Muslims do not consider visiting the cave an integral part of the Hajj. Nonetheless many visit it for reasons of personal pleasure and spirituality, and though some consider it a place of worship, this view conflicts with Salafist interpretations of Islamic ritual. While the cave plays an important role in As-Sīrah an-Nabawiyyah (prophetic biography), it is not considered as holy as other sites in Mecca, such as the Al-Haram Mosque, and so under most interpretations of Islam, the same reward is received for praying here as any other place in Mecca.[11]

Before Prophet Muhammad s first revelation, he had transcendental dreams, in which were signs that his prophethood had begun and that the stones in Mecca would greet him with the salaam. These dreams lasted for six months.[12]

An increasing need for solitude led Prophet Muhammad to seek seclusion and meditation (Muraqabah) in the rocky hills which surrounded Mecca.[13] He retreated to the cave for one month each year, engaging in seclusion (Tahannuth).[b][4][16] He took provisions and fed the poor who came to him. Before returning home to his family for more provisions, he would circumambulate the Kaaba seven times.`,
      image: "/ghar.jpg",
    },

    {  id: "mount-uhud",
      title: "Mount Uhud",
      description: "Mount Uhud is a mountain north of Medina, in the Hejazi region of Saudi Arabia. It is 1,077 m (3,533 ft) high and 7.5 km (4.7 miles) long.",
      content:`The battle was fought on March 19, 625 CE (3 Shawwal 3 AH in the Islamic calendar) at the valley located in front of Mount Uhud, in what is now northwestern Arabia.[1] It occurred between a force from the Muslim community of Medina led by Muhammad, and a force led by Abu Sufyan ibn Harb from Mecca, the town from which many of the Muslims had previously emigrated. The Battle of Uḥud was the second military encounter between the Meccans and the Muslims, preceded by the Battle of Badr in 624, where a small Muslim army had defeated the much larger Meccan army.

Marching out from Mecca towards Medina on March 11, 625, the Meccans desired to avenge their losses at Badr and strike back at Muhammad and his followers. The Muslims readied for war soon afterward and the two armies fought on the slopes and plains of Mount ‘Uḥud.

Whilst heavily outnumbered, the Muslims gained the early initiative and forced the Meccan lines back, thus leaving much of the Meccan camp unprotected. When the battle looked to be only one step far from a decisive Muslim victory, a serious mistake was committed by a part of the Muslim army, which shifted the outcome of the battle. A breach of Muhammad s orders by the Muslim archers, who left their assigned posts to despoil the Meccan camp, allowed a surprise attack from the Meccan cavalry, led by Meccan war veteran Khalid ibn al-Walid, which brought chaos to the Muslim ranks. Many Muslims were killed, including Hamza ibn ,Abd al-Muttalib, Muhammad s uncle and foster brother. Muhammad himself got injured. The Muslims had to withdraw up the slopes of Uḥud. The Meccans did not pursue the Muslims further, but marched back to Mecca declaring victory. The two armies would meet again in 627 at the Battle of the Trench.[2]`,
      image: "/Mount_Uhud.jpeg",},
      {
        id: "al-ghars-well",
        title: "The Well Of Ghars",
        description: "A historic water well in the city of Medina, Saudi Arabia. Traditionally it is believed that the prophet Muhammad drank from this well once.",
        content:`It is one of the few historical sites known to be connected to the life of prophet Muhammad. The ancient watering hole is located in the Bat haan valley in the al-Awali district, approximately four kilometers south of the Masjid Nabawi, and some 1,200 meters east of the Masjid al-Jummah and Masjid al-Quba.

The Gharas denotes cultivating a plant, Bilal Ibn Rabah used to bring the water from this well to Prophet Muhammad. This, now defunct water well, is located approximately one and a half kilometer north of Masjid Quba.

According to the historical sources (most likely Moughera Ibn Shu ba, d. 671 CE) that the well was originally dug by Malik bin al-Nahhat the grandfather of Sa ad bin Khaythamah bin al-Haris, the latter of whom owned the well when he hosted the prophet Muhammad during the Hijrah journey from Mecca to Medina.

Ibn Najjar (circa mid thirteenth century CE) notes that the distance between the Masjid al-Quba and the Bir al-Ghars is about half a mile, and was located in a deserted area. At the time it was demaged by flood waters and was filled up. The water at the time was stagnant and had turned green, but tasted fine. It remained in the same state until the year 1300 CE, when it was again restored briefly and abandoned again.

In the time of Samhudi (circa 1470 CE) it was again bought by an influential person, restored, a garden and a small mosque was installed around it. A staircase was built to access the water during the low level season. This staircase may have survived today as well.`,
        image: "/ghars-well.jpg",
      },
    
  // Add more posts here as needed
];

interface BlogPageProps {
  params: { id: string };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const { id } = params;
  const router = useRouter();

  // Find the blog post based on the dynamic `id`
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Comments State
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );

  // Load Comments from LocalStorage
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments-${id}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [id]);

  // Save Comments to LocalStorage
  const saveComments = (newComments: { name: string; comment: string }[]) => {
    setComments(newComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
  };

  const handleAddComment = (name: string, comment: string) => {
    const newComments = [...comments, { name, comment }];
    saveComments(newComments);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Blog Layout */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Content Section */}
        <div className="md:w-2/3 p-6">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-6">{post.description}</p>
          <div className="text-gray-800 leading-relaxed">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-gray-100 shadow-lg rounded-lg mt-8 p-6">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {/* Comments List */}
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow flex flex-col"
            >
              <strong className="text-blue-600">{comment.name}</strong>
              <p className="text-gray-700">{comment.comment}</p>
            </li>
          ))}
        </ul>

        {/* Add Comment Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const nameInput = form.elements.namedItem(
              "name"
            ) as HTMLInputElement;
            const commentInput = form.elements.namedItem(
              "comment"
            ) as HTMLInputElement;

            const name = nameInput.value.trim();
            const comment = commentInput.value.trim();

            if (name && comment) {
              handleAddComment(name, comment);
              nameInput.value = "";
              commentInput.value = "";
            }
          }}
          className="mt-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full border rounded p-2 mb-4"
            required
          />
          <textarea
            name="comment"
            placeholder="Your comment"
            className="w-full border rounded p-2 mb-4"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Back to Blog Page Button */}
      <div className="mt-6">
        <button
          onClick={() => router.push("/blog")}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back to Blog Page
        </button>
      </div>
    </div>
  );
};

export default BlogPage;