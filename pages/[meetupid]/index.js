import { MongoClient, ObjectId } from "mongodb";
import { DUMMY_MEETUPS } from "..";
import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function Details(props) {
  console.log(props);

  return <MeetupDetails {...props.meetupData} />;
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://kedharnadh555:Kedhar.555@cluster0.llzoxit.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupids = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetupids.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
    const client = await MongoClient.connect(
        "mongodb+srv://kedharnadh555:Kedhar.555@cluster0.llzoxit.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      
  const meetupId = context.params.meetupid;
  console.log(meetupId);
//   console.log(meetupsCollection);
  let selectedMeetupdata = await meetupsCollection.findOne({ _id:new ObjectId(meetupId)});
  console.log(selectedMeetupdata);
  client.close();
//   meetupdata=meetupdata.map((meetup) => ({
//     title:meetup.title,
//     description:meetup.description,
//     image:meetup.image,
//     address:meetup.address,
//     id: meetup._id.toString(),
//   }))
  return {
    props: {
      meetupData: {
        id:selectedMeetupdata._id.toString(),
        title:selectedMeetupdata.title,
        address:selectedMeetupdata.address,
        description:selectedMeetupdata.description,
        image:selectedMeetupdata.image
      },
    },
  };
}
