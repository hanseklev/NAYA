import { navigate } from "gatsby";

export default function HomePageRedirect() {
  if (typeof window !== "undefined") {
    return navigate("/");
  }
}
