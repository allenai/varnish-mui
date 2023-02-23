import { logos } from '@allenai/varnish';

export default function Demo() {
  return (
    <div>
      <div>micro</div>
      <logos.AI2Logo size="micro" />
      <br />
      {/* For default size, no need to set <AI2Logo size="default" />
        since "default" is the default value of the size property. */}
      <div>default</div>
      <logos.AI2Logo />
      <br />
      <div>lg</div>
      <logos.AI2Logo size="lg" />
      <br />
    </div>
  );
}
