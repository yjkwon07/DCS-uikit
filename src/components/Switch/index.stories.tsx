import { useState } from 'react';

import { IconComponent } from '../Svg';
import { SCALE } from './@types';
import Switch from './Switch';

export default {
  title: 'Form/Switch',
  component: Switch,
  argTypes: {},
};

export const Default = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <div tw="mb-[10px]">
        {Object.values(SCALE).map((scale) => (
          <div key={scale} tw="mb-[10px]">
            <Switch.Group>
              <Switch.Label tw="mr-10">{scale}</Switch.Label>
              <Switch scale={scale} checked={enabled} onChange={setEnabled} description="toggle button" />
            </Switch.Group>
          </div>
        ))}
      </div>
      <div tw="flex gap-10">
        <div>
          <Switch.Group>
            <Switch.Label tw="mr-10">Disabled</Switch.Label>
            <Switch checked onChange={setEnabled} disabled />
          </Switch.Group>
        </div>
        <div>
          <Switch.Group>
            <Switch.Label tw="mr-10">Disabled</Switch.Label>
            <Switch checked={false} onChange={setEnabled} disabled />
          </Switch.Group>
        </div>
      </div>
    </div>
  );
};

export const Icon = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <div tw="mb-[10px]">
        {Object.values(SCALE).map((scale) => (
          <div key={scale} tw="mb-[10px]">
            <Switch.Group>
              <Switch.Label tw="mr-10">{scale}</Switch.Label>
              <Switch
                scale={scale}
                checked={enabled}
                onChange={setEnabled}
                description="toggle button"
                startIcon={<IconComponent iconName="Sun" />}
                endIcon={<IconComponent iconName="Moon" />}
              />
            </Switch.Group>
          </div>
        ))}
      </div>
      <div tw="flex gap-10">
        <div>
          <Switch.Group>
            <Switch.Label tw="mr-10">Disabled</Switch.Label>
            <Switch
              checked
              onChange={setEnabled}
              startIcon={<IconComponent iconName="Sun" />}
              endIcon={<IconComponent iconName="Moon" />}
              disabled
            />
          </Switch.Group>
        </div>
        <div>
          <Switch.Group>
            <Switch.Label tw="mr-10">Disabled</Switch.Label>
            <Switch
              checked={false}
              onChange={setEnabled}
              startIcon={<IconComponent iconName="Sun" />}
              endIcon={<IconComponent iconName="Moon" />}
              disabled
            />
          </Switch.Group>
        </div>
      </div>
    </div>
  );
};
