import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Page } from "../../components/Page";
import { PageBlock } from "../../components/common/PageBlock";
import { CoursePageDescriptionView } from "../../components/course/CoursePageDescriptionView";
import { CoursePageStudentView } from "../../components/course/CoursePageStudentView";
import { TabSelection } from "../../components/course/TabSelection";
import { useAuthedQuery } from "../../hooks/authedQuery";
import { useIsLoggedIn } from "../../hooks/authentication";
import { Course } from "../../queries/__generated__/Course";
import { COURSE } from "../../queries/course";
import { COURSE_WITH_ENROLLMENT } from "../../queries/courseWithEnrollment";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "course-page",
      "course-application",
    ])),
  },
});

export const getStaticPaths = async () => {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { courseId: "1" } }, { params: { courseId: "2" } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: "blocking",
  };
};

const CoursePage: FC = () => {
  const router = useRouter();
  const { courseId, tab: tabParam } = router.query;
  const { t } = useTranslation("course-page");

  const isLoggedIn = useIsLoggedIn();

  const id = parseInt(courseId as string, 10);
  const defaultTab = isLoggedIn ? 1 : 0;
  const tab =
    typeof tabParam === "string" ? parseInt(tabParam, 10) : defaultTab;

  const query = isLoggedIn ? COURSE_WITH_ENROLLMENT : COURSE;

  const { data: courseData, loading, error } = useAuthedQuery<Course>(query, {
    variables: {
      id,
    },
  });

  const course = courseData?.Course_by_pk;

  if (!course) {
    return <div>{t("courseNotAvailable")}</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoggedIn ? (
        <Page>
          <PageBlock>
            <div className="py-4">
              <TabSelection
                currentTab={tab}
                tabs={["zur Kursbeschreibung", "laufender Kurs"]}
              />
            </div>
          </PageBlock>
          {tab === 0 ? (
            <CoursePageDescriptionView course={course} />
          ) : (
            <CoursePageStudentView course={course} />
          )}
        </Page>
      ) : (
        <Page>
          <CoursePageDescriptionView course={course} />
        </Page>
      )}
    </div>
  );
};

export default CoursePage;
