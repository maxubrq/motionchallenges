import { Dock, DockIcon } from '@components/magicui/dock';
import { Globe, LayoutDashboard, SunMoon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Button } from './button';

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function CentralDock() {
  const Icons = {
    globe: (props: IconProps) => <Globe {...props} />,
    sunMoon: (props: IconProps) => <SunMoon {...props} />,
    layout: (props: IconProps) => <LayoutDashboard {...props} />,
  };

  const DATA = [
    {
      name: 'language',
      icon: Icons.globe,
      explain: 'Change language',
    },
    {
      name: 'theme',
      icon: Icons.sunMoon,
      explain: 'Change light/dark mode',
    },
    {
      name: 'layout',
      icon: Icons.layout,
      explain: 'Change layout',
    },
  ];

  const hanldeIconClick = (name: string) => {
    const text = (name: string) =>
      `You want to change ${name}, but it's not implemented yet. 😅`;
    toast.error(text(name));
  };

  return (
    <TooltipProvider>
      <Dock direction="bottom">
        {DATA.map((item) => (
          <DockIcon
            key={item.name}
            aria-label={item.explain}
            onClick={() => hanldeIconClick(item.name)}
          >
            {item.name !== 'layout' ? (
              <Tooltip>
                <TooltipTrigger>
                  <item.icon />
                </TooltipTrigger>
                <TooltipContent>{item.explain}</TooltipContent>
              </Tooltip>
            ) : (
              <Tooltip>
                <TooltipTrigger>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant={'ghost'}>
                        <item.icon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent onSelect={() => {}}>
                      <DropdownMenuRadioGroup>
                        <DropdownMenuRadioItem value="option1">
                          Option 1
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="option2">
                          Option 2
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent>{item.explain}</TooltipContent>
              </Tooltip>
            )}
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}
