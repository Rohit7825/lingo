import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutLine">Primary Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutLine">Secondary Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutLine">Danger Outline</Button>
      <Button variant="super">super</Button>
      <Button variant="superOutLine">super Outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutLine">sidebar Outline</Button>
    </div>
  );
};

export default ButtonPage;
