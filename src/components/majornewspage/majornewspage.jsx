import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { Grid, Header, Button, Icon } from 'semantic-ui-react';
import Footer from '../base/footer';

const buttonGroupStyle = {
  width: '100%',
};

const playButtonStyle = {
  width: '50%',
};

const newsItemContainerStyle = {
  width: '100%',
};

const majorNewsItemData = {
  left: [{
    imageUrl: 'https://ichef.bbci.co.uk/news/695/cpsprodpb/17525/production/_100252559_52985792-d2c0-4b9a-92c1-2837a5f74356.jpg',
    title: 'Trading partners threaten retaliation',
    snippet: 'The main trading partners of the US have reacted angrily after President Donald Trump announced plans to impose tariffs on steel and aluminium imports.',
    date: '2 hours ago',
    source: 'news.bbc.co.uk',
  }, {
    imageUrl: 'https://files.qatarliving.com/styles/horizontal_large/s3/post/2018/03/01/fake%20news%201.jpg?7zsm1U7.j_ffO03xnAPfCm3S1q3v7SRh&itok=oOLzEng_',
    title: 'Trading partners threaten retaliation',
    snippet: 'The main trading partners of the US have reacted angrily after President Donald Trump announced plans to impose tariffs on steel and aluminium imports.',
    date: '2 hours ago',
    source: 'news.bbc.co.uk',
  }],
  right: [{
    imageUrl: 'https://files.qatarliving.com/styles/horizontal_large/s3/post/2018/03/01/fake%20news%201.jpg?7zsm1U7.j_ffO03xnAPfCm3S1q3v7SRh&itok=oOLzEng_',
    title: 'US investment giant pressures gun firms',
    snippet: 'The main trading partners of the US have reacted angrily after President Donald Trump announced plans to impose tariffs on steel and aluminium imports.',
    date: '2 hours ago',
    source: 'news.bbc.co.uk',
  }, {
    imageUrl: 'https://ichef.bbci.co.uk/news/695/cpsprodpb/17525/production/_100252559_52985792-d2c0-4b9a-92c1-2837a5f74356.jpg',
    title: 'US investment giant pressures gun firms',
    snippet: 'The main trading partners of the US have reacted angrily after President Donald Trump announced plans to impose tariffs on steel and aluminium imports.',
    date: '2 hours ago',
    source: 'news.bbc.co.uk',
  }],
};

const newsItemData = [{
    imageUrl: 'https://ichef.bbci.co.uk/news/736/cpsprodpb/6FD0/production/_100242682_gettyimages-906344120.jpg',
    title: 'Trump steel tariffs: Trading partners threaten retaliation',
    snippet: 'The main trading partners of the US have reacted angrily after President Donald Trump announced plans to impose tariffs on steel and aluminium imports.',
    date: '2 hours ago',
    source: 'news.bbc.co.uk',
  }, {
    imageUrl: 'https://ichef-1.bbci.co.uk/news/736/cpsprodpb/131F4/production/_100242387_gettyimages-925805956.jpg',
    title: 'Snow in Europe: Deadly winter storm brings chaos',
    snippet: 'Large parts of Europe have endured another night of freezing conditions as a Siberian weather system continues to bring chaos.',
    date: '3 hours ago',
    source: 'news.bbc.co.uk',
  },
];

class MajorNewsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Header textAlign='center'>
          <Button.Group style={buttonGroupStyle}>
            <Button icon='podcast' content='Listen' style={playButtonStyle} labelPosition='left'>
            </Button>
            <Button.Or />
            <Button icon='tv' content='Watch' style={playButtonStyle} labelPosition='right'>
            </Button>
          </Button.Group>
        </Header>
        <Grid textAlign='center' columns={1} padded style={{position:'relative'}} celled>
        </Grid>
        <Footer/>
      </div>
    );
  }
}

MajorNewsPage.contextTypes = {
  router: PropTypes.object
};

export default MajorNewsPage;
