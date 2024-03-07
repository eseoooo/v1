import NavBar from "@/components/header/nav-bar";
import Notification from "@/components/header/notification";

export default function Header() {
  return (
    <>
      <header className="fixed z-30">
        <NavBar />
      </header>
      <Notification />
    </>
  );
}
