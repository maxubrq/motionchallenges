import { Dock, DockIcon } from '@components/magicui/dock';
import { Globe, SunMoon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { toast } from 'sonner';

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function CentralDock() {
  const Icons = {
    globe: (props: IconProps) => <Globe {...props} />,
    sunMoon: (props: IconProps) => <SunMoon {...props} />,
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
            <Tooltip>
              <TooltipTrigger>
                <item.icon />
              </TooltipTrigger>
              <TooltipContent>{item.explain}</TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}
