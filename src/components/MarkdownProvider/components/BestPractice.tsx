/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { cloneElement, HTMLAttributes } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { MD } from '@zendeskgarden/react-typography';
import { ReactComponent as XStrokeIcon } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ReactComponent as CheckLgStrokeIcon } from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { ReactComponent as AlertErrorStrokeIcon } from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';
import { getColor } from '@zendeskgarden/react-theming';

export interface IStyledBestPracticeTextProps {
  hue: string;
}

export interface IFileNode {
  name: string;
  publicURL: string;
}

export interface IFileEdge {
  node: IFileNode;
}

const StyledBestPracticeRow = styled.div`
  display: grid;
  grid-gap: ${p => p.theme.space.base * 4}px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: ${props => props.theme.space.base * 12}px 0;
`;

const StyledBestPracticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.space.base * 6}px;
`;

const StyledBestPracticeImageContainer = styled.div<HTMLDivElement>`
  display: flex;
  justify-content: center;
  border: ${props => `${props.theme.borders.sm} ${getColor('grey', 300, props.theme)}`};
  border-bottom: none;
  border-top-left-radius: ${props => props.theme.borderRadii.md};
  border-top-right-radius: ${props => props.theme.borderRadii.md};

  & img {
    object-fit: contain;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.space.base * 2}px;
`;

const StyledBestPracticeText = styled.div<IStyledBestPracticeTextProps>`
  border-top: ${props => `${props.theme.borders.md} ${getColor(props.hue, 500, props.theme)}`};
  border-bottom-left-radius: ${props => props.theme.borderRadii.md};
  border-bottom-right-radius: ${props => props.theme.borderRadii.md};
  background: ${props => getColor('neutralHue', 100, props.theme)};
  padding: ${props => `${props.theme.space.md}`};

  ul {
    margin: 0;
    list-style: none;
  }

  li {
    padding: ${props => props.theme.space.base}px 0;
  }

  li:not(:last-child) {
    border-bottom: ${props =>
      `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  }
`;

const StyledIcon = styled(({ children, ...props }) =>
  cloneElement(React.Children.only(children), props)
)`
  margin-right: ${props => props.theme.space.xs};
  color: ${props => getColor(props.hue, 500, props.theme)};
`;

export const BestPractice = (props: HTMLAttributes<HTMLDivElement>) => {
  return <StyledBestPracticeRow {...props} />;
};

export const BestPracticeSection: React.FC<{
  type: 'do' | 'dont' | 'caution';
  imageSource?: string;
}> = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/components-avatar/" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

const staticQueries: Record<string, Function> = {
  avatar: useAvatarFiles
};

export const BestPracticeSection: React.FC<{
  type: 'do' | 'dont' | 'caution';
  imageSource?: string;
}> = props => {
  let component;
  let data;

  if (props.imageSource) {
    component = props.imageSource?.split('-')[1];
    data = staticQueries[component]();
  }

  const edges: IFileEdge[] = data.allFile.edges;

  const IMAGES: Record<string, string> = edges
    .map(edge => edge.node)
    .reduce((images, node) => ({ ...images, [node.name]: node.publicURL }), {});

  let Icon;
  let hue;
  let title;
  let altText;

  if (props.type === 'do') {
    Icon = CheckLgStrokeIcon;
    hue = 'successHue';
    title = 'Do this';
    altText = 'best practices';
  } else if (props.type === 'dont') {
    Icon = XStrokeIcon;
    hue = 'dangerHue';
    title = 'Not this';
    altText = 'not best practices';
  } else {
    Icon = AlertErrorStrokeIcon;
    hue = 'warningHue';
    title = 'Caution';
    altText = 'caution practices';
  }

  return (
    <StyledBestPracticeContainer>
      <StyledBestPracticeImageContainer>
        {props.imageSource && <img src={IMAGES[props.imageSource]} alt={altText} />}
      </StyledBestPracticeImageContainer>
      <StyledBestPracticeText hue={hue}>
        <StyledTitle>
          <StyledIcon hue={hue}>
            <Icon />
          </StyledIcon>
          <MD tag="h4" isBold>
            {title}
          </MD>
        </StyledTitle>
        {props.children}
      </StyledBestPracticeText>
    </StyledBestPracticeContainer>
  );
};
