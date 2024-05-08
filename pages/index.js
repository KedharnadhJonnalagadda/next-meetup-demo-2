import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://livesharetravel.com/wp-content/uploads/2014/08/Places-to-go-in-London-for-every-traveller.jpg",
    description:
      "London is one of the world's most exciting cities but its also one of the biggest and there are a host of great things to do there.",
    address: "London",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media2.thrillophilia.com/images/photos/000/041/109/original/1584271952_shutterstock_749994316.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
    description:
      "Mumbai is one of the world's most exciting cities but its also one of the biggest and there are a host of great things to do there.",
    address: "Mumbai",
  },
];

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetup</title>
        <meta name="New Metups!" content="List of all metups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://kedharnadh555:Kedhar.555@cluster0.llzoxit.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  let meetups = await meetupsCollection.find().toArray();
  console.log(meetups);
  (meetups = meetups.map((meetup) => ({
    title: meetup.title,
    description: meetup.description,
    image: meetup.image,
    address: meetup.address,
    id: meetup._id.toString(),
  }))),
    client.close();
  return {
    props: {
      meetups,
    },
    revalidate: 1,
  };
}
