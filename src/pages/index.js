import * as React from 'react'
import Layout from '../layout'

import Top from '../components/top/top'
import ArticleSection from '../components/ArticleSection/ArticleSection'
import ArticleSectionAndPicture from '../components/ArticleSectionAndPicture/ArticleSectionAndPicture'
import useWindowSize from '../components/useWindowSize/useWindowSize';

const IndexPage = () => {
  const { size } = useWindowSize();

  return (
    <Layout>
      <Top />
      <ArticleSection
        heading="Concept"
        subheading={'心安らぐ\n素敵な空間とともに'}
        description={[
            "古き良き時代の面影を残しつつ、モダンな雰囲気も取り入れた独特な空間デザイン。ジャズの調べに乗せて、思い思いのくつろぎのひとときをお楽しみください。",
            "自家焙煎のこだわりのコーヒーと、丁寧に仕上げたお料理の数々をご堪能あれ。訪れるたびに新しい発見と感動があふれる、魅力的なカフェで素敵な時間を。"
        ]}
        imagesrc={{
          small: "images/index/cafe.sp.jpg",
          medium: "images/index/cafe.tb.jpg",
          large: "images/index/cafe.jpg"
        }}
        size={size}
      />
      <ArticleSection
        heading="Coffee"
        subheading={'一杯のコーヒーから\n始める特別なひととき'}
        description={[
            "豆の選定から焙煎、挽き方、ドリップに至るまで、真心込めて作ります。",
            "カップの中に広がるコーヒーの芳醇な香りが、日常の喧騒を忘れさせ、心を満たします。",
        ]}
        imagesrc={{
          small: "images/index/pour-over-setup.sp.jpg",
          medium: "images/index/pour-over-setup.tb.jpg",
          large: "images/index/pour-over-setup.jpg"
        }}
        size={size}
        reverse={true}
      />
      <ArticleSection
        heading="Point"
        subheading={'選び抜いた\nこだわりの品々'}
        description={[
            "豆の素晴らしさを最大限に引き出すことに情熱を注ぐ、それが私たちのこだわりです。",
            "品質の高い豆を求めて、バイヤーが世界各地の産地を訪れ、直接豆を吟味し、仕入れます。"
        ]}
        imagesrc={{
          small: "images/index/coffee-beans.sp.jpg",
          medium: "images/index/coffee-beans.tb.jpg",
          large: "images/index/coffee-beans.jpg"
        }}
        size={size}
      />

      <ArticleSectionAndPicture
        heading="History"
        subheading={'憩いの場をつくるため\n追い続けたコーヒーと共に'}
        description={[
            "大学時代、学生たちの憩いの場としてのカフェの必要性を感じ、自分でカフェを開くことを夢見始めました。",
            "卒業後、大手企業に就職しましたが、カフェを開くという夢を諦めきれず、数年後に退職を決意。コーヒーの奥深さを追求したいと考え、バリスタの道を志すことにしました。",
            "国内外の有名カフェで修業を積み、多くの経験を重ねる中で、独自のコーヒー哲学を確立していきました。世界各地から厳選したこだわりの豆、丁寧な焙煎、そしてバリスタの技術を駆使して淹れる一杯一杯のコーヒー。",
            "ここで過ごす一杯のコーヒーの時間が、お客様の日常に彩りと潤いを与えられることを願っています。"
        ]}
      />
      
      
    </Layout>
  )
}

export default IndexPage






