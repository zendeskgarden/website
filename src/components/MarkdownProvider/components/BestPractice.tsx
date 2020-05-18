/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { cloneElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as XStrokeIcon } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ReactComponent as CheckLgStrokeIcon } from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { ReactComponent as AlertErrorStrokeIcon } from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';
import { Well, Title, Paragraph } from '@zendeskgarden/react-notifications';
import { getColor } from '@zendeskgarden/react-theming';

interface IStyledWellProps {
  hue: string;
}

interface ISectionProps {
  hue: string;
  title: string;
  altText: string;
  imageSource: string;
  icon: ReactNode;
}

const WellContainerStyles = css`
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  margin: ${p => p.theme.space.xl} 0;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin: ${p => p.theme.space.md} ${p => p.theme.space.xs};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledImg = styled.img`
  border: ${p => `${p.theme.borders.sm} ${getColor('neutralHue', 300, p.theme)}`};
  border-bottom: none;
  border-top-left-radius: ${p => p.theme.borderRadii.md};
  border-top-right-radius: ${p => p.theme.borderRadii.md};
`;

const StyledFigure = styled.figure`
  ${WellContainerStyles}
`;

const StyledWell = styled(props => <Well isRecessed {...props} />).attrs(p => ({
  forwardedAs: p.tag
}))<IStyledWellProps>`
  border: none;
  border-top: ${p => p.theme.borders.md};
  border-radius: 0;
  border-color: ${p => getColor(p.hue, 500, p.theme)};
  padding: ${p => p.theme.space.md};

  ${p => p.tag !== 'figcaption' && WellContainerStyles}
`;

const StyledIcon = styled(({ children, ...props }) =>
  cloneElement(React.Children.only(children), props)
)`
  margin-right: ${p => p.theme.space.xs};
  color: ${p => getColor(p.hue, 500, p.theme)};
`;

const StyledBestPractice = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: ${p => p.theme.breakpoints.md}) {
    justify-content: space-between;
  }

  @media (max-width: ${p => p.theme.breakpoints.sm}) {
    display: block;
  }
`;

export const Section: React.FC<ISectionProps> = props => {
  const content = (
    <>
      <Title>
        <StyledIcon hue={props.hue}>{props.icon}</StyledIcon>
        {props.title}
      </Title>
      <Paragraph>{props.children}</Paragraph>
    </>
  );

  return props.imageSource ? (
    <StyledFigure>
      <StyledImg alt={props.altText} src={props.imageSource} />
      <StyledWell tag="figcaption" hue={props.hue}>
        {content}
      </StyledWell>
    </StyledFigure>
  ) : (
    <StyledWell hue={props.hue}>{content}</StyledWell>
  );
};

export const Dont: React.FC<ISectionProps> = props => (
  <Section title="Not this" altText="not this" hue="dangerHue" icon={<XStrokeIcon />} {...props} />
);

export const Do: React.FC<ISectionProps> = props => (
  <Section
    title="Do this"
    altText="do this"
    hue="successHue"
    icon={<CheckLgStrokeIcon />}
    {...props}
  />
);

export const Caution: React.FC<ISectionProps> = props => (
  <Section
    title="Caution"
    altText="caution"
    hue="warningHue"
    icon={<AlertErrorStrokeIcon />}
    {...props}
  />
);

export const BestPractice: React.FC = props => (
  <StyledBestPractice>{props.children}</StyledBestPractice>
);
