import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetups() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetUpData) {
    console.log(enteredMeetUpData);
    const responce = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await responce.json();
    console.log(data);
    router.push("/");
  }
  return (
    <>
    <Head>
        <title>React Meetup</title>
        <meta name="New Metups!"  content="List of all metups"/>
    </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
