import React from "react";
import { Meta, Story } from "@storybook/react";
import pkg from "../../components/surfaces/Card/package.json";
import Card, { CardProps } from "../../components/surfaces/Card/Card";
import CardActions from "../../components/surfaces/CardActions/CardActions";
import CardContent from "../../components/surfaces/CardContent/CardContent";
import CardHeader from "../../components/surfaces/CardHeader/CardHeader";
import Typography from "../../components/datadisplay/Typography/Typography";
import { Avatar, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default {
  title: "Components/Surfaces/Card",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args: any) => (
  <Card {...args}>
    <CardHeader
      avatar={<Avatar aria-label="recipe">R</Avatar>}
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
        frozen peas along with the mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton aria-label="show more">
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
  </Card>
);

/**
 * Implementation of Card
 */
export const Default = Template.bind({});

/**
 * Raised variant of Card component
 */
export const Raised = Template.bind({});
Raised.args = {
  raised: true,
};
