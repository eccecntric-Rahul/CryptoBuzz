import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "react-native-paper";
import CryptoText from "../styleguide/CryptoText";
import { CustomTheme } from "../types/ThemeTypes";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Globe, 
  Briefcase, 
  GraduationCap,
  Code,
  Award,
} from "lucide-react-native";

const ProfileScreen = () => {
  const theme: CustomTheme = useTheme();

  const handleContactPress = (type: string) => {
    switch (type) {
      case 'email':
        Linking.openURL('mailto:rk2655415@gmail.com');
        break;
      case 'phone':
        Linking.openURL('tel:+919015709221');
        break;
      case 'linkedin':
        Linking.openURL('https://www.linkedin.com/in/rahul-kumar-821109187/');
        break;
      case 'github':
        Linking.openURL('https://github.com/eccecntric-Rahul');
        break;
      case 'portfolio':
        Linking.openURL('https://krrahul.netlify.app/');
        break;
    }
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../images/DrawerBackground.png")}
        style={styles.backgroundImage}
      />
      <View style={{ position: "relative" }}>
        <View style={styles.profileContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../images/rahulPic.jpeg")}
              style={styles.profileImage}
            />
          </View>
          <CryptoText
            type="H1"
            style={{ color: theme.colors.primary, marginTop: 8 }}
          >
           Rahul Kumar
          </CryptoText>
          <CryptoText
            type="B1"
            style={{ color: theme.colors.muted, marginTop: 4, marginBottom: 16 }}
          >
            Full Stack Software Engineer
          </CryptoText>
          
          {/* Contact Buttons */}
          <View style={styles.contactButtons}>
            <TouchableOpacity 
              style={[styles.contactButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => handleContactPress('email')}
            >
              <Mail size={16} color={theme.colors.onSurface} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.contactButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => handleContactPress('phone')}
            >
              <Phone size={16} color={theme.colors.onSurface} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.contactButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => handleContactPress('linkedin')}
            >
              <Linkedin size={16} color={theme.colors.onSurface} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.contactButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => handleContactPress('github')}
            >
              <Github size={16} color={theme.colors.onSurface} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.contactButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => handleContactPress('portfolio')}
            >
              <Globe size={16} color={theme.colors.onSurface} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{height: 200}}></View>
      {/* Professional Details */}
      <ScrollView style={styles.detailsContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.detailsContent}>
          
          {/* Summary */}
          <View style={styles.section}>
            <CryptoText type="H3" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
              Professional Summary
            </CryptoText>
            <CryptoText type="B2" style={[styles.sectionText, { color: theme.colors.onSurface }]}>
              Experienced Full Stack Software Engineer with 4+ years specializing in React and React Native. 
              Proven track record in developing scalable web/mobile applications, leading cross-functional teams, 
              and optimizing system performance. Delivered 30%+ efficiency improvements in fintech solutions and 
              consistently recognized for high-impact contributions.
            </CryptoText>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <CryptoText type="H3" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
              Skills
            </CryptoText>
            <View style={styles.skillsGrid}>
              <View style={styles.skillColumn}>
                <CryptoText type="B1" style={[styles.skillCategory, { color: theme.colors.primary }]}>
                  Frontend
                </CryptoText>
                <CryptoText type="B3" style={[styles.skillText, { color: theme.colors.onSurface }]}>
                  React.js, React Native, Next.js, TypeScript, Redux, Material-UI, React Native Paper
                </CryptoText>
              </View>
              <View style={styles.skillColumn}>
                <CryptoText type="B1" style={[styles.skillCategory, { color: theme.colors.primary }]}>
                  Backend
                </CryptoText>
                <CryptoText type="B3" style={[styles.skillText, { color: theme.colors.onSurface }]}>
                  Node.js, Express.js, MongoDB, Mongoose, Java, Python
                </CryptoText>
              </View>
              <View style={styles.skillColumn}>
                <CryptoText type="B1" style={[styles.skillCategory, { color: theme.colors.primary }]}>
                  Tools
                </CryptoText>
                <CryptoText type="B3" style={[styles.skillText, { color: theme.colors.onSurface }]}>
                  Git, Jest, Firebase, Docker, Jenkins, AWS
                </CryptoText>
              </View>
            </View>
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <CryptoText type="H3" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
              Experience
            </CryptoText>
            
            <View style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Briefcase size={16} color={theme.colors.primary} />
                <CryptoText type="B1" style={[styles.experienceTitle, { color: theme.colors.primary }]}>
                  Planify Capital Limited
                </CryptoText>
              </View>
              <CryptoText type="B3" style={[styles.experienceSubtitle, { color: theme.colors.muted }]}>
                Sr. Software Developer (SDE-2) • June 2023 – Present • Gurgaon, Haryana
              </CryptoText>
              <CryptoText type="B3" style={[styles.experienceText, { color: theme.colors.onSurface }]}>
                • Developed 20+ core modules including Channel Partner mini-app, Screener, Tradebook, Masterclass{'\n'}
                • Led frontend development for Buy-Sell Dashboard with real-time trading capabilities{'\n'}
                • Created reusable Style Guide Kit, standardizing UI components across platform
              </CryptoText>
            </View>

            <View style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Briefcase size={16} color={theme.colors.primary} />
                <CryptoText type="B1" style={[styles.experienceTitle, { color: theme.colors.primary }]}>
                  Salescode.ai (formerly Applicate.ai)
                </CryptoText>
              </View>
              <CryptoText type="B3" style={[styles.experienceSubtitle, { color: theme.colors.muted }]}>
                Software Developer • July 2021 – June 2023 • Gurgaon, Haryana
              </CryptoText>
              <CryptoText type="B3" style={[styles.experienceText, { color: theme.colors.onSurface }]}>
                • Led development of login, theming, and navigation modules across React Native apps{'\n'}
                • Created app designer tool in React.js, automating 70% of manual workflows
              </CryptoText>
            </View>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <CryptoText type="H3" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
              Education
            </CryptoText>
            <View style={styles.experienceHeader}>
              <GraduationCap size={16} color={theme.colors.primary} />
              <CryptoText type="B1" style={[styles.experienceTitle, { color: theme.colors.primary }]}>
                Mahavir Swami Institute of Technology (GGSIPU)
              </CryptoText>
            </View>
            <CryptoText type="B3" style={[styles.experienceSubtitle, { color: theme.colors.muted }]}>
              B.Tech in Electronics and Communication Engineering • 85% • 2016–2020
            </CryptoText>
          </View>

          {/* Projects */}
          <View style={styles.section}>
            <CryptoText type="H3" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
              Projects
            </CryptoText>
            
            <View style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Code size={16} color={theme.colors.primary} />
                <CryptoText type="B1" style={[styles.experienceTitle, { color: theme.colors.primary }]}>
                  Tech-Rahul
                </CryptoText>
              </View>
              <CryptoText type="B3" style={[styles.experienceText, { color: theme.colors.onSurface }]}>
                Designed a creative personal portfolio website inspired by Netflix, showcasing sections as interactive tiles. 
                Increased professional outreach by 20% in one month.
              </CryptoText>
            </View>

            <View style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Code size={16} color={theme.colors.primary} />
                <CryptoText type="B1" style={[styles.experienceTitle, { color: theme.colors.primary }]}>
                  Planify App
                </CryptoText>
              </View>
              <CryptoText type="B3" style={[styles.experienceText, { color: theme.colors.onSurface }]}>
                Engineered key modules including Navigation, Notification, Screener, Tradebook, and Masterclass. 
                Designed 10+ product pages ensuring responsive and intuitive UI.
              </CryptoText>
            </View>
          </View>

          {/* Achievements */}
          <View style={styles.section}>
            <CryptoText type="H3" style={[styles.sectionTitle, { color: theme.colors.primary }]}>
              Achievements
            </CryptoText>
            
            <View style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Award size={16} color={theme.colors.primary} />
                <CryptoText type="B1" style={[styles.experienceTitle, { color: theme.colors.primary }]}>
                  Employee of the Month
                </CryptoText>
              </View>
              <CryptoText type="B3" style={[styles.experienceText, { color: theme.colors.onSurface }]}>
                March 2025, April 2024 — For revamping the entire app UI at Planify Capital Ltd.
              </CryptoText>
            </View>

            <View style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Award size={16} color={theme.colors.primary} />
                <CryptoText type="B1" style={[styles.experienceTitle, { color: theme.colors.primary }]}>
                  Certificate of Appreciation
                </CryptoText>
              </View>
              <CryptoText type="B3" style={[styles.experienceText, { color: theme.colors.onSurface }]}>
                Feb 2023, Sep 2022 — For significant and exemplary contribution at Salescode.ai.
              </CryptoText>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    height: 70,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: hp("14%"),
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "white",
  },
  profileContainer: {
    paddingHorizontal: 16,
    alignItems: "center",
    position: "absolute",
    top: -hp("5%"),
    width: "100%",
  },
  contactButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 4,
  },
  contactButton: {
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailsContainer: {
    flex: 1,
  },
  detailsContent: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: 'bold',
  },
  sectionText: {
    lineHeight: 24,
    textAlign: 'justify',
  },
  skillsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skillColumn: {
    flex: 1,
    marginRight: 16,
  },
  skillCategory: {
    marginBottom: 8,
    fontWeight: '600',
  },
  skillText: {
    lineHeight: 20,
  },
  experienceItem: {
    marginBottom: 16,
  },
  experienceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  experienceTitle: {
    marginLeft: 8,
    fontWeight: '600',
  },
  experienceSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  experienceText: {
    lineHeight: 24,
    textAlign: 'justify',
  },
});
