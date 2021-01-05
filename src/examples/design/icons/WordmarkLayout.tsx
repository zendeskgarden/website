/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { getColor, PALETTE } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

import { ReactComponent as WordmarkZendesk } from '@zendeskgarden/svg-icons/src/26/wordmark-zendesk.svg';
import { ReactComponent as RelationshapeChat } from '@zendeskgarden/svg-icons/src/26/relationshape-chat.svg';
import { ReactComponent as WordmarkChat } from '@zendeskgarden/svg-icons/src/26/wordmark-chat.svg';
import { ReactComponent as RelationshapeConnect } from '@zendeskgarden/svg-icons/src/26/relationshape-connect.svg';
import { ReactComponent as WordmarkConnect } from '@zendeskgarden/svg-icons/src/26/wordmark-connect.svg';
import { ReactComponent as RelationshapeExplore } from '@zendeskgarden/svg-icons/src/26/relationshape-explore.svg';
import { ReactComponent as WordmarkExplore } from '@zendeskgarden/svg-icons/src/26/wordmark-explore.svg';
import { ReactComponent as RelationshapeGather } from '@zendeskgarden/svg-icons/src/26/relationshape-gather.svg';
import { ReactComponent as WordmarkGather } from '@zendeskgarden/svg-icons/src/26/wordmark-gather.svg';
import { ReactComponent as RelationshapeGuide } from '@zendeskgarden/svg-icons/src/26/relationshape-guide.svg';
import { ReactComponent as WordmarkGuide } from '@zendeskgarden/svg-icons/src/26/wordmark-guide.svg';
import { ReactComponent as RelationshapeMessage } from '@zendeskgarden/svg-icons/src/26/relationshape-message.svg';
import { ReactComponent as WordmarkMessage } from '@zendeskgarden/svg-icons/src/26/wordmark-message.svg';
import { ReactComponent as RelationshapeSupport } from '@zendeskgarden/svg-icons/src/26/relationshape-support.svg';
import { ReactComponent as WordmarkSupport } from '@zendeskgarden/svg-icons/src/26/wordmark-support.svg';
import { ReactComponent as RelationshapeSell } from '@zendeskgarden/svg-icons/src/26/relationshape-sell.svg';
import { ReactComponent as WordmarkSell } from '@zendeskgarden/svg-icons/src/26/wordmark-sell.svg';
import { ReactComponent as RelationshapeTalk } from '@zendeskgarden/svg-icons/src/26/relationshape-talk.svg';
import { ReactComponent as WordmarkTalk } from '@zendeskgarden/svg-icons/src/26/wordmark-talk.svg';
import { ReactComponent as RelationshapeSunshine } from '@zendeskgarden/svg-icons/src/26/sunshine.svg';
import { ReactComponent as WordmarkSunshine } from '@zendeskgarden/svg-icons/src/26/wordmark-sunshine.svg';
import { ReactComponent as RelationshapeGarden } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as WordmarkGarden } from '@zendeskgarden/svg-icons/src/26/wordmark-garden.svg';
import { ReactComponent as RelationshapeZendesk } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { ReactComponent as WordmarkCapitalZendesk } from '@zendeskgarden/svg-icons/src/26/wordmark-capital-zendesk.svg';
import { ReactComponent as WordmarkCapitalSuite } from '@zendeskgarden/svg-icons/src/26/wordmark-capital-suite.svg';
import { ReactComponent as WordmarkCapitalThe } from '@zendeskgarden/svg-icons/src/26/wordmark-capital-the.svg';

const StyledGrid = styled(Grid)`
  font-size: ${p => p.theme.fontSizes.xxl};

  /* stylelint-disable declaration-no-important */
  .relationshape {
    fill: ${p => getColor('kale', 700, p.theme)};
    transition: color 0.4s, fill 0.4s;
  }

  .is-dark .relationshape {
    fill: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.background} !important;
  }

  .wordmark {
    transition: color 0.4s;
  }

  .wordmark-bold-suite {
    width: 1.85em !important;
  }

  .wordmark-bold-support {
    width: 3em !important;
  }

  .wordmark-capital-suite {
    width: 2em !important;
  }

  .wordmark-capital-the {
    width: 1.5em !important;
  }

  .wordmark-capital-zendesk {
    width: 3.35em !important;
  }

  .wordmark-chat {
    width: 1.8em !important;
  }

  .wordmark-connect {
    width: 3.27em !important;
  }

  .wordmark-explore {
    width: 3em !important;
  }

  .wordmark-garden {
    width: 2.8em !important;
  }

  .wordmark-gather {
    width: 2.65em !important;
  }

  .wordmark-guide {
    width: 2.19em !important;
  }

  .wordmark-message {
    width: 3.61em !important;
  }

  .wordmark-messaging {
    width: 4.19em !important;
  }

  .wordmark-reach {
    width: 2.35em !important;
  }

  .wordmark-sell {
    width: 1.27em !important;
  }

  .wordmark-sunshine {
    width: 3.35em !important;
  }

  .wordmark-support {
    width: 3.15em !important;
  }

  .wordmark-talk {
    width: 1.5em !important;
  }

  .wordmark-zendesk {
    width: 3.38em !important;
  }

  .is-dark .wordmark {
    color: ${p => p.theme.colors.background};
  }

  .relationshape ~ .wordmark {
    margin-top: 0.19em;
  }

  .relationshape + .wordmark {
    margin-left: 1em;
  }

  .relationshape ~ [class*='wordmark-capital'] {
    margin-top: 0.08em;
  }

  .wordmark-zendesk + .wordmark {
    margin-left: 0.05em;
  }
  /* stylelint-enable declaration-no-important */
`;

const StyledCol = styled(Col).attrs({ sm: 12, md: 6 })`
  margin-bottom: ${p => p.theme.space.sm};
`;

const WordmarkLayout: React.FC = () => {
  return (
    <StyledGrid>
      <Row>
        <StyledCol>
          <RelationshapeChat
            className="relationshape"
            css={css`
              color: ${PALETTE.product.chat};
            `}
          />
          <WordmarkChat className="wordmark wordmark-chat" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkChat className="wordmark wordmark-chat" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeConnect
            className="relationshape"
            css={css`
              color: ${PALETTE.product.connect};
            `}
          />
          <WordmarkConnect className="wordmark wordmark-connect" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkConnect className="wordmark wordmark-connect" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeExplore
            className="relationshape"
            css={css`
              color: ${PALETTE.product.explore};
            `}
          />
          <WordmarkExplore className="wordmark wordmark-explore" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkExplore className="wordmark wordmark-explore" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeGather
            className="relationshape"
            css={css`
              color: ${PALETTE.product.gather};
            `}
          />
          <WordmarkGather className="wordmark wordmark-gather" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkGather className="wordmark wordmark-gather" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeGuide
            className="relationshape"
            css={css`
              color: ${PALETTE.product.guide};
            `}
          />
          <WordmarkGuide className="wordmark wordmark-guide" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkGuide className="wordmark wordmark-guide" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeMessage
            className="relationshape"
            css={css`
              color: ${PALETTE.product.message};
            `}
          />
          <WordmarkMessage className="wordmark wordmark-message" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkMessage className="wordmark wordmark-message" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeSupport
            className="relationshape"
            css={css`
              color: ${PALETTE.product.support};
            `}
          />
          <WordmarkSupport className="wordmark wordmark-support" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkSupport className="wordmark wordmark-support" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeSell
            className="relationshape"
            css={css`
              color: ${PALETTE.product.sell};
            `}
          />
          <WordmarkSell className="wordmark wordmark-sell" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkSell className="wordmark wordmark-sell" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeTalk
            className="relationshape"
            css={css`
              color: ${PALETTE.product.talk};
            `}
          />
          <WordmarkTalk className="wordmark wordmark-talk" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkTalk className="wordmark wordmark-talk" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeSunshine
            className="relationshape"
            css={css`
              color: ${PALETTE.product.talk};
            `}
          />
          <WordmarkSunshine className="wordmark wordmark-sunshine" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkSunshine className="wordmark wordmark-sunshine" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeGarden
            className="relationshape"
            css={css`
              color: ${p => getColor('green', 400, p.theme)};
            `}
          />
          <WordmarkGarden className="wordmark wordmark-garden" />
        </StyledCol>
        <StyledCol>
          <WordmarkZendesk className="wordmark wordmark-zendesk" />
          <WordmarkGarden className="wordmark wordmark-garden" />
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>
          <RelationshapeZendesk className="relationshape" />
          <WordmarkCapitalThe className="wordmark wordmark-capital-the" />
          <WordmarkCapitalSuite className="wordmark wordmark-capital-suite" />
        </StyledCol>
        <StyledCol>
          <WordmarkCapitalZendesk className="wordmark wordmark-capital-zendesk" />
          <WordmarkCapitalSuite className="wordmark wordmark-capital-suite" />
        </StyledCol>
      </Row>
    </StyledGrid>
  );
};

export default WordmarkLayout;
