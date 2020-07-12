import React from 'react';
import {View, Text, StyleProp, TextStyle, ViewStyle} from 'react-native';
import DevNavButton from '../components/Developer/DevNavButton';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

type SectionTitleProps = {
  text: string;
  style?: StyleProp<TextStyle>;
}
const SectionTitle = styled((props: SectionTitleProps) => {
  return (
    <Text style={props.style}>
      {props.text}
    </Text>
  );
})`
  color: black;
  font-weight: bold;
  padding-vertical: 10px;
  padding-horizontal: 15px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 10px;
  text-align: center;
  border-width: 1px;
  border-color: rgb(200,200,200);
`;


type SectionProps = {
  title: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const Section = styled((props: SectionProps) => {
  return (
    <View style={props.style}>
      <SectionTitle text={props.title} />
      {props.children}
    </View>
  );
})`
  padding: 15px;
  border-bottom-width: 1px;
  border-color: rgb(100,100,100);
  justify-content: space-around;
`;


const DevNavScreen = () => {
  return (
    <ScrollView>
      <Section title="Generic">
        <DevNavButton to="MapMaster" active />
        <DevNavButton to="Scheduler" active />
      </Section>
      <Section title="SignIn">
        <DevNavButton to="SocialLogin" />
        <DevNavButton to="SignInManager" />
        <DevNavButton to="SignUpManager" />
      </Section>
      <Section title="ScheduleManager">
        <DevNavButton to="Talk" />
        <DevNavButton to="ChatRoom" />
        <DevNavButton to="ScheduleList" />
        <DevNavButton to="ScheduleFinder" />
        <DevNavButton to="ScheduleEditor" />
        <DevNavButton to="SchedulerManager" />
      </Section>
      <Section title="TrackManager">
        <DevNavButton to="TrackInfo" />
        <DevNavButton to="TrackViewer" />
        <DevNavButton to="TrackListEntry" />
        <DevNavButton to="TrackList" />
        <DevNavButton to="TrackEditor" />
        <DevNavButton to="TrackFinder" />
        <DevNavButton to="TrackManager" />
      </Section>
      <Section title="Community">
        <DevNavButton to="Community" />
        <DevNavButton to="Article" />
        <DevNavButton to="Comment" />
        <DevNavButton to="ArticleListEntry" />
        <DevNavButton to="ArticleList" />
        <DevNavButton to="ArticleEditor" />
        <DevNavButton to="ArticleFinder" />
        <DevNavButton to="ArticleManager" />
      </Section>
      <Section title="MyPage">
        <DevNavButton to="UserInfo" />
        <DevNavButton to="UserInfoManager" />
        <DevNavButton to="FinishedTrackViewer" />
      </Section>
    </ScrollView>
  );
};

export default DevNavScreen;
