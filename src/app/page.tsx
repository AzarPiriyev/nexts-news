import Image from "next/image";
import Container from "@/components/mainContainer";
import HomeContainer from "../container/home";
import { getLatest } from "../../api/service";

export default async function Home() {

  const latestPromise = await getLatest();

  const [latest] = await Promise.all([latestPromise]);

  return (
  <Container>
    <HomeContainer latest = {latest}/>
  </Container>
  );
}
