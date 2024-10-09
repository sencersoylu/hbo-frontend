import { TextAlignJustifyIcon } from "@radix-ui/react-icons"
 
import { Button } from  "@/components/ui/button"
 
export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <TextAlignJustifyIcon className="h-4 w    -4" />
    </Button>
  )
}
