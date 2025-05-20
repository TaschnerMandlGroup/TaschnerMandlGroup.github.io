---
title:
date: 2022-10-24
type: landing

sections:
  - block: slider
    content:
      slides:
        - title:
          content:
          align: center
          background:
            image:
              filename: logo_single_expanded.svg
            position: center
            color: '#313066'
          link:
            text: "▼"
            url: "#main-content"
        - title:
          content:
          align: center
          background:
            image:
              filename: group_photo.jpg
            position: center
            color: '#313066'
          link:
            text: "▼"
            url: "#main-content"
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: ''
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 10000

  - block: markdown
    id: main-content
    content:
      title: "Taschner-Mandl Group"
      subtitle: >
        We tackle unresolved questions of neuroblastoma pathogenesis and develop new diagnostic and therapeutic approaches to facilitate precision medicine for children with malignant solid tumors.
      text: >
        ## Background
        
        <p style="font-size: 90%;">Neuroblastoma is the most common extracranial solid pediatric cancer accounting for 8-10% of cancers in childhood and 15% of pediatric oncology deaths. Neuroblastoma arises from the developing sympatho-adrenal lineage during the embryonic development. It is a genetically heterogeneous disease with a diverse clinical outcome ranging from spontaneous tumour regression to malignant metastatic disease with relapses and poor response to current therapy. While patients whose tumours undergo spontaneous regression or maturation (ganglioneuroblastomas, ganglioneuromas) have mostly an excellent outcome, only a minority of children with aggressive tumours can be cured. Despite the advances in genomic and trancriptomic analyses, the identification of molecular determinants of the very poor therapeutic response and worst outcome of high-risk patients remains challenging. Thus, a better understanding of the biology of both, spontaneously regressing/maturing and aggressive tumours is of high interest to develop novel treatment approaches.</p>

  - block: markdown
    content:
      title:
      text: >
        <div style="display: flex; align-items: flex-start; gap: 2rem;">
          <div style="flex: 1; display: flex; align-items: center !important; justify-content: center !important;">
            <img src="/uploads/fig1.jpg" style="max-width: 100%; height: auto; border-radius: 4px;" />
          </div>
          <div style="flex: 2;">
            <h3 style="margin-top: 0.5rem;">Biology of high-risk neuroblastoma</h3>
            <p style="font-size: 80%;">One of our main research interests is the biology of <strong>high-risk neuroblastoma</strong>. Patients that are diagnosed and stratified as high-risk suffer from <strong>relapses</strong> and <strong>metastases</strong> and their survival rate remains below 40% despite intensive multimodal treatment. To date there are only a few driver genes linked to the pathogenesis of high-risk neuroblastoma, most of which are not directly druggable and frequently <strong>insufficient response to therapy</strong> is observed. In our group, we employ state-of-the-art technologies, such as genome-wide and targeted CRISPR/Cas9 screens and single cell genomics and epigenomics in order to identify the oncogenic drivers and epigenetic dependencies in tumours from high-risk neuroblastoma patients. We have established in vitro and in vivo preclinical patient-derived models for functional assays and drug testing for precision oncology that can be translated into existing and new clinical trials with the ultimate goal to improve treatment outcomes and survival of high-risk neuroblastoma patients.</p>
          </div>
        </div>

  - block: markdown
    content:
      title:
      text: >
        <div style="display: flex; align-items: flex-start; gap: 2rem;">
          <div style="flex: 2;">
            <h3 style="margin-top: 0.5rem;">Tumour heterogeneity and microenvironment</h3>
            <p style="font-size: 80%;">Solid tumours often consist of different subpopulations of cells that harbor distinct genotypes and phenotypes. This results in a variation of clinically important features such as the abundance of prognostic markers and therapeutic targets, leading to differential levels of treatment sensitivity. Tumour cell metastasis and adaptation to new tissue microenvironments can further promote <strong>inter- and intratumour heterogeneity</strong> among metastasizing and disseminated tumour cells. In support of this notion, we have recently shown that disseminated tumour cells in the bone marrow substantially differ from the tumour they originated from in regards to their genetic makeup and expression programs. Tumour cells disseminate to the bone marrow in various solid cancers such as neuroblastoma, breast cancer and Ewing sarcoma, which is associated with poor outcome. In the majority of metastatic neuroblastoma patients, disseminated tumour cells are present in the bone marrow already at the time point of diagnosis. Our aim is to capture the full spectrum of tumor cells in neuroblastoma and to understand their <strong>interaction with the tumor microenvironment</strong> at the primary site and in the metastatic bone marrow by using novel single-cell-omics and multiplex imaging technologies. This will allow us to identify new biomarkers and to develop better therapeutics for targeted treatment.</p>
          </div>
          <div style="flex: 1; display: flex; align-items: center !important; justify-content: center !important;">
            <img src="/uploads/fig2.jpg" style="max-width: 100%; height: auto; border-radius: 4px;" />
          </div>
        </div>

  - block: markdown
    content:
      title:
      text: >
        <div style="display: flex; align-items: flex-start; gap: 2rem;">
          <div style="flex: 1; display: flex; align-items: center !important; justify-content: center !important;">
            <img src="/uploads/fig3.jpg" style="max-width: 100%; height: auto; border-radius: 4px;" />
          </div>
          <div style="flex: 2;">
            <h3 style="margin-top: 0.5rem;">Development of new diagnostics and prognostic markers for precision oncology</h3>
            <p style="font-size: 80%;">Another focus of our group is the translation of current research to clinical practice with the development of <strong>better diagnostic</strong> approaches and <strong>prognostic markers</strong>. As pediatric solid tumours are rare, this can only be addressed within the scope of <strong>multi-center</strong> as well as <strong>multi-disciplinary</strong> cooperation. Towards this, we are part of different consortia and collaborative studies, that bring together experts in the fields of biological and computer-based research with pediatric oncologists. In addition to molecular profiling of the primary tumor and bone marrow, novel <strong>liquid biopsy</strong> approaches, i.e. the analysis of tumor markers in body fluids, are important tools to monitor cancer patients and detect relapse early. We employ advanced bioinformatics analyses, <strong>AI-based machine-learning</strong> and customized visualization strategies on complex multi-dimensional data for identifying novel markers for precision oncology. As an example, we have recently developed the VISIOMICS software platform <a href="http://www.visiomics.at/">http://www.visiomics.at/</a>, which supports an integrated analysis of image and multiOMICS data for tumour diagnostics.</p>
          </div>
        </div>
---
