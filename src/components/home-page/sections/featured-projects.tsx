import styles from "./featured-projects.module.css";
import { useTranslation } from "next-i18next";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const LatestProjects = () => {
  const { t } = useTranslation("home_page");

  const projectsData = [
    {
      title: t("featured-projects.projects.fluantly.title"),
      description: t("featured-projects.projects.fluantly.description"),
      startDate: new Date(2022, 5),
      endDate: new Date(),
      imageUrl:
        "https://mycroft.ai/wp-content/uploads/2018/05/languages-edited.png",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.description}>
        <h1>{t("featured-projects.title")}</h1>
        <p>{t("featured-projects.description")}</p>
      </div>
      <Accordion defaultActiveKey="0">
        {projectsData.map((project, i) => {
          return (
            <Accordion.Item
              eventKey={i.toString()}
              className="accordion accordion-flush"
            >
              <Accordion.Header>{project.title}</Accordion.Header>
              <Accordion.Body style={{ padding: "20px 10%" }}>
                <Card>
                  <Card.Img src={project.imageUrl} variant="top" />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </section>
  );
};

export default LatestProjects;
