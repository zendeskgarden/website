/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { math } from 'polished';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Well } from '@zendeskgarden/react-notifications';
import { Grid } from '@zendeskgarden/react-grid';
import { getColor, mediaQuery, StyledBaseIcon } from '@zendeskgarden/react-theming';
import { ReactComponent as XStrokeIcon } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ReactComponent as CheckLgStrokeIcon } from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { ReactComponent as AlertErrorStrokeIcon } from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';

const StyledRow = styled(Grid.Row)`
  margin-top: ${p => p.theme.space.lg};
  margin-bottom: ${p => p.theme.space.xxl};

  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => `${p.theme.space.base * 6}px`};
    margin-bottom: ${p => p.theme.space.lg};
  }
`;

const StyledCol = styled(Grid.Col)`
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
  border: ${p =>
    `${p.theme.borders.sm} ${getColor({ theme: p.theme, variable: 'border.default' })}`};
  border-bottom: none;
  border-top-left-radius: ${p => p.theme.borderRadii.md};
  border-top-right-radius: ${p => p.theme.borderRadii.md};
  padding: ${p => p.theme.space.md};
  text-align: center;
`;

interface IStyledCaptionProps {
  type: 'success' | 'warning' | 'danger';
}

const getVariable = (type: IStyledCaptionProps['type'], isBorder?: boolean) => {
  let retVal;

  if (isBorder) {
    if (type === 'success') {
      retVal = 'border.successEmphasis';
    } else if (type === 'warning') {
      retVal = 'border.warningEmphasis';
    } else if (type === 'danger') {
      retVal = 'border.dangerEmphasis';
    }
  } else if (type === 'success') {
    retVal = 'foreground.success';
  } else if (type === 'warning') {
    retVal = 'foreground.warning';
  } else if (type === 'danger') {
    retVal = 'foreground.danger';
  }

  return retVal;
};

const StyledCaption = styled(p => <Well {...p} />).attrs<IStyledCaptionProps>(p => ({
  forwardedAs: p.tag
}))<IStyledCaptionProps>`
  border: none;
  border-top: ${p =>
    `${p.theme.borders.md} ${getColor({ theme: p.theme, variable: getVariable(p.type, true /* isBorder */) })}`};
  border-radius: 0;
  background-color: ${p => getColor({ theme: p.theme, variable: 'background.subtle' })};
  padding-bottom: ${p => p.theme.space.base * 7}px;
  color: ${({ theme }) => getColor({ variable: 'foreground.default', theme })};

  & > ul {
    list-style-type: none;
    margin-bottom: 0;
    margin-left: 0;

    & > li:not(:first-child) {
      margin-top: ${p => p.theme.space.xs};
      border-top: ${p =>
        `${p.theme.borders.sm} ${getColor({ theme: p.theme, variable: 'border.default' })}`};
      padding-top: ${p => p.theme.space.xs};
    }
  }

  & > p:last-child {
    margin-bottom: 0;
  }
`;

const StyledTitle = styled(p => <Well.Title {...p} />).attrs(p => ({ forwardedAs: p.tag }))`
  display: flex;
  align-items: center;
  margin-left: -${p => math(`${p.theme.iconSizes.md} + ${p.theme.space.xs}`)};
  color: ${p => getColor({ theme: p.theme, variable: getVariable(p.type) })};

  & + p,
  & + ul {
    margin-top: ${p => `${p.theme.space.base * 4}px`};
  }

  & > svg {
    margin-right: ${p => p.theme.space.xs};
  }
`;

const StyledIcon = styled(StyledBaseIcon)`
  color: ${p => getColor({ theme: p.theme, variable: getVariable(p.type) })};
`;

interface ICaptionProps extends PropsWithChildren, IStyledCaptionProps {
  title: string;
  icon: ReactNode;
  imageSource?: string | IGatsbyImageData;
}

const Caption: React.FC<ICaptionProps> = props => (
  <StyledCaption tag={props.imageSource ? 'figcaption' : undefined} type={props.type}>
    <StyledTitle tag="strong" type={props.type}>
      <StyledIcon type={props.type}>{props.icon}</StyledIcon>
      {props.title}
    </StyledTitle>
    {props.children}
  </StyledCaption>
);

interface ISectionProps extends ICaptionProps {
  imageHeight?: number;
  imageWidth?: number;
  imageIsSquare?: boolean;
  imageBackgroundColor?: string;
  imageIsFreeForm?: boolean;
}

const Section: React.FC<ISectionProps> = props => {
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
              <img alt="" src={props.imageSource} style={imageStyles} />
            </div>
          ) : (
            <GatsbyImage
              image={props.imageSource}
              alt=""
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
  <Section {...props} title="Do this" type="success" icon={<CheckLgStrokeIcon />} />
);

export const Dont: React.FC<ISectionProps> = props => (
  <Section {...props} title="Not this" type="danger" icon={<XStrokeIcon />} />
);

export const Caution: React.FC<ISectionProps> = props => (
  <Section {...props} title="Caution" type="warning" icon={<AlertErrorStrokeIcon />} />
);

interface IBestPracticesProps extends PropsWithChildren {
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
