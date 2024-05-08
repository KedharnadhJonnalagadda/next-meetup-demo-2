import Head from "next/head";
import classes from "./MeetupDetails.module.css";

export default function MeetupDetails(props) {
  return (
    <>
    <Head>
        <title>{props.title}</title>
        <meta name={props.title} content={props.description} />
    </Head>
      <section className={classes.details}>
        <img src={props.image} alt={props.description} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </>
  );
}
