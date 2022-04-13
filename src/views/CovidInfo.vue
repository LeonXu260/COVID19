<template>
  <section class="info">
    <article class="title">病毒信息</article>
    <aside class="content">
      <p>病毒：SARS-CoV-2，导致疾病命名 COVID-19</p>
      <p>传染源：新冠肺炎的患者。无症状感染者也可能成为感染源。</p>
      <p>
        传播途径：经呼吸道飞沫、接触传播是主要的传播途径。气溶胶传播和消化道等传播途径尚未明确。
      </p>
      <p>
        易感人群：人群普遍易感。老年人及有基础疾病者感染后病情较重，儿童及婴儿也有发病
      </p>
      <p>
        潜伏期：一般为3～7天，最长不超过14天，潜伏期内可能存在感染性，其中无症状比例感染性非常罕见
      </p>
      <p>宿主：野生动物，可能为中华菊头蝠</p>
    </aside>
  </section>
</template>

<script>
export default {
  name: "CovidInfo",
};
</script>

<style lang="less" scoped>
.info {
  padding: 0.2rem;
  .title {
    border-left: 0.04rem solid #002fa7;
    padding-left: 0.1rem;
    margin-bottom: 0.2rem;
    font-size: 0.25rem;
  }
  p {
    color: #666;
  }
}
</style>