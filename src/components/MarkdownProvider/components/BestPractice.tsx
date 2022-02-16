/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { math } from 'polished';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Well, Title } from '@zendeskgarden/react-notifications';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as XStrokeIcon } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ReactComponent as CheckLgStrokeIcon } from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { ReactComponent as AlertErrorStrokeIcon } from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';

const StyledRow = styled(Row)`
  margin-top: ${p => p.theme.space.lg};
  margin-bottom: ${p => p.theme.space.xxl};

  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => `${p.theme.space.base * 6}px`};
    margin-bottom: ${p => p.theme.space.lg};
  }
`;

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    &:not(:first-child) {
      margin-top: ${p => `${p.theme.space.base * 6}px`};
    }
  }
`;

const StyledFigure = styled.figure`
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledImgContainer = styled.div`
  border: ${p => `${p.theme.borders.sm} ${getColor('neutralHue', 300, p.theme)}`};
  border-bottom: none;
  border-top-left-radius: ${p => p.theme.borderRadii.md};
  border-top-right-radius: ${p => p.theme.borderRadii.md};
  padding: ${p => p.theme.space.md};
  text-align: center;
`;

interface IStyledCaptionProps {
  hue: string;
}

const StyledCaption = styled(p => <Well isRecessed {...p} />).attrs<IStyledCaptionProps>(p => ({
  forwardedAs: p.tag
}))<IStyledCaptionProps>`
  border: none;
  border-top: ${p => `${p.theme.borders.md} ${getColor(p.hue, 500, p.theme)}`};
  border-radius: 0;
  padding-bottom: ${p => p.theme.space.base * 7}px;
  color: ${p => p.theme.colors.foreground};

  & > ul {
    list-style-type: none;
    margin-bottom: 0;
    margin-left: 0;

    & > li:not(:first-child) {
      margin-top: ${p => p.theme.space.xs};
      border-top: ${p => `${p.theme.borders.sm} ${getColor('neutralHue', 300, p.theme)}`};
      padding-top: ${p => p.theme.space.xs};
    }
  }

  & > p:last-child {
    margin-bottom: 0;
  }
`;

const StyledTitle = styled(p => <Title {...p} />).attrs(p => ({ forwardedAs: p.tag }))`
  display: flex;
  align-items: center;
  margin-left: -${p => math(`${p.theme.iconSizes.md} + ${p.theme.space.xs}`)};
  color: ${p => getColor(p.hue, 600, p.theme)};

  /* stylelint-disable-next-line no-descending-specificity */
  & + p {
    margin-top: ${p => `${p.theme.space.base * 4}px`};
  }

  & > svg {
    margin-right: ${p => p.theme.space.xs};
  }
`;

interface ICaptionProps {
  hue: string;
  title: string;
  icon: ReactNode;
  imageSource?: string | IGatsbyImageData;
}

const Caption: React.FC<ICaptionProps> = props => (
  <StyledCaption tag={props.imageSource ? 'figcaption' : undefined} hue={props.hue}>
    <StyledTitle tag="strong" hue={props.hue}>
      {props.icon}
      {props.title}
    </StyledTitle>
    {props.children}
  </StyledCaption>
);

interface ISectionProps extends ICaptionProps {
  imageAlt: string;
  imageHeight?: number;
  imageWidth?: number;
  imageIsSquare?: boolean;
  imageBackgroundColor?: string;
  imageIsFreeForm?: boolean;
}

export const Section: React.FC<ISectionProps> = props => {
  if (props.imageSource) {
    const imageStyles = {
      width: props.imageWidth,
      height: props.imageHeight,
      maxWidth: props.imageIsSquare ? 160 : undefined,
      maxHeight: props.imageIsFreeForm ? undefined : 160
    };

    return (
      <StyledFigure>
        <StyledImgContainer>
          {typeof props.imageSource === 'string' ? (
            <div
              css={`
                display: flex;
                justify-content: center;
              `}
            >
              <img alt={props.imageAlt} src={props.imageSource} style={imageStyles} />
            </div>
          ) : (
            <GatsbyImage
              image={props.imageSource}
              alt={props.imageAlt}
              style={{
                display: 'block',
                margin: '0 auto',
                ...imageStyles
              }}
            />
          )}
        </StyledImgContainer>
        <Caption {...props} />
      </StyledFigure>
    );
  }

  return <Caption {...props} />;
};

export const Do: React.FC<ISectionProps> = props => (
  <Section
    {...props}
    title="Do this"
    imageAlt="do this"
    hue="successHue"
    icon={<CheckLgStrokeIcon />}
  />
);

export const Dont: React.FC<ISectionProps> = props => (
  <Section {...props} title="Not this" imageAlt="not this" hue="dangerHue" icon={<XStrokeIcon />} />
);

export const Caution: React.FC<ISectionProps> = props => (
  <Section
    {...props}
    title="Caution"
    imageAlt="caution"
    hue="warningHue"
    icon={<AlertErrorStrokeIcon />}
  />
);

interface IBestPracticesProps {
  rows?: boolean;
}

export const BestPractice: React.FC<IBestPracticesProps> = ({ rows, ...props }) =>
  rows ? (
    <>
      {React.Children.map(props.children, child => (
        <StyledRow>{child}</StyledRow>
      ))}
    </>
  ) : (
    <StyledRow>
      {React.Children.map(props.children, child => (
        <StyledCol sm>{child}</StyledCol>
      ))}
    </StyledRow>
  );
