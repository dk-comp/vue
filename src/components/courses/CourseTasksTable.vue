<template>
  <div class="course-tasks-table">
    <h5>Задания курса</h5>
    <div class="plan-table">
      <div class="table-header is-hidden-mobile">
        <span>Занятие</span>
        <span>Заголовок</span>
      </div>
      <div class="fields">
        <div class="field grey">
          <div class="time-cell">
            <h6>Задание №1</h6>
            <span class="time">30 минут</span>
          </div>
          <div class="desc-cell">
            <h6>Название задания №1</h6>
            <div class="test-results">
              <span class="tasks">10 заданий</span>
              <span>Кол-во попыток: 2</span>
              <span>Оценка: 80 из 100 баллов</span>
              <span class="done">Задания пройдены успешно</span>
            </div>
          </div>
          <div class="actions-cell">
            <a href="#" class="action-btn button">Пройти заново</a>
          </div>
        </div>
        <div class="field grey">
          <div class="time-cell">
            <h6>Задание №2</h6>
            <span class="time">30 минут</span>
          </div>
          <div class="desc-cell">
            <h6>Название задания №2</h6>
            <div class="test-results">
              <span class="tasks">10 заданий</span>
              <span>Кол-во попыток: 2</span>
              <span>Оценка: 80 из 100 баллов</span>
              <span class="fail">Задания не выполнены</span>
            </div>
          </div>
          <div class="actions-cell">
            <a href="#" class="action-btn button">Пройти заново</a>
          </div>
        </div>
        <div class="field grey">
          <div class="time-cell">
            <h6>Задание №3</h6>
            <span class="time">30 минут</span>
          </div>
          <div class="desc-cell">
            <h6>Название задания №3</h6>
            <div class="test-results">
              <span class="tasks">10 заданий</span>
              <!--<span>Кол-во попыток: 2</span>-->
              <!--<span>Оценка: 80 из 100 баллов</span>-->
              <!--<span class="fail">Задания не выполнены</span>-->
            </div>
          </div>
          <div class="actions-cell">
            <a href="#" class="action-btn button">Пройти заново</a>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <a class="button" href="#">Перейти в лекцию</a>
      <a class="button" href="#">Перейти к тестам</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseTasksTable'
}
</script>

<style scoped lang="sass">
.course-tasks-table
  display: flex
  flex-direction: column
  margin-bottom: 34px

  .actions
    display: flex
    justify-content: flex-end

    .button
      @include button-focus-none
      background-color: #c83636
      padding: 10px 20px
      min-height: 35px
      @include flex-center
      color: #ffffff
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 15px
      font-weight: 700

      &:not(:last-child)
        margin-right: 20px

  .plan-table
    margin-bottom: 20px
    display: flex
    flex-direction: column
    width: 100%
    padding: 30px
    background-color: white

    .fields
      display: flex
      flex-direction: column

      .field
        display: flex
        min-height: 60px
        padding: 0 18px
        border-bottom: 1px solid #dcd9d9
        margin-bottom: 0

        &.grey
          background-color: #f7f7f7

        > *
          display: flex
          flex-direction: column
          padding: 20px 0

        .actions-cell
          justify-content: flex-end

          .done
            color: #8fa928
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 13px
            font-weight: 700
            margin-bottom: 10px
            padding-left: 20px
            position: relative
            max-width: 120px

            &::before
              content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABLklEQVQoU42SsUtCYRTFfxdTiLCGICIaGgof2dBWTUEQ7RFPcYj+gcjUdtuKwEe0B0UQ7+FSSBANre0FPYVwaYqGhkDC3rvxSsUkqw/u8F3OOd/5zr3CP07eiUeivjeWTboV+Qu/exaLRt7kCmUG5PBXQqA8oF4JWGwIv3clqCL7tnGiQqrpQpSdrgTLjlkg6TbLxbTpmnJwGhuph2Q15EtpI3l/FwAs28gBey1luPHldSFjPtbEso1bYAqogaQQoqgeN8EKVS9cn91afngKegHhGRhsAHwgqJ6vu754IZ3LrVTc1msFx5gX5Rzo74i47qNL2UT5ur3/+WnLiU+j3iUw1GZlLZNwjzrn1Eqp4EyOi+9fIEwA+c2Eu/3TUL/FWnBGe8P0Da+b5Wq3DfgAgXNfTJyAdaUAAAAASUVORK5CYII=")
              position: absolute
              top: 0
              left: 0

          .action-btn
            width: 130px
            height: 35px
            background-color: #565656
            @include button-focus-none
            @include flex-center
            color: #ffffff
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700

            &.red
              background-color: $mainRed

        .desc-cell
          width: 63%
          margin-right: 25px

          .test-results
            display: flex
            align-items: center
            color: #2e2e2e
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700

            span
              &:not(:last-child)
                margin-right: 20px

              &.fail
                color: #c83636
                font-family: "Proxima Nova Rg", sans-serif
                font-size: 13px
                font-weight: 700
                padding-left: 20px
                position: relative
                max-width: 170px

                &::before
                  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAqUlEQVQoU12QsQ3CQAxFv12c6MgGMEKai5IOJiFMAKPABIRJoCMiRWCDsEHSoStsdNGddKKxJf8n/29Tn+eZM+YgzNeqbQcAeJTlmkV2xrkztUXhhysAI6tuPSBENwAZgFcKeG30JYi+f+hpbS5EdwDLIMY2seqGZk9rayK6pICq7quua+KG6Jkyc6b/DFMgot2QArNnuCJmepP/w9eYI5ib9A8QqRfOnX5D7EZ+HVLuiwAAAABJRU5ErkJggg==")
                  margin-right: 6px
                  position: absolute
                  top: 0
                  left: 0

              &.done
                color: #8fa928
                font-family: "Proxima Nova Rg", sans-serif
                font-size: 13px
                font-weight: 700
                padding-left: 20px
                position: relative
                max-width: 170px

                &::before
                  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABLklEQVQoU42SsUtCYRTFfxdTiLCGICIaGgof2dBWTUEQ7RFPcYj+gcjUdtuKwEe0B0UQ7+FSSBANre0FPYVwaYqGhkDC3rvxSsUkqw/u8F3OOd/5zr3CP07eiUeivjeWTboV+Qu/exaLRt7kCmUG5PBXQqA8oF4JWGwIv3clqCL7tnGiQqrpQpSdrgTLjlkg6TbLxbTpmnJwGhuph2Q15EtpI3l/FwAs28gBey1luPHldSFjPtbEso1bYAqogaQQoqgeN8EKVS9cn91afngKegHhGRhsAHwgqJ6vu754IZ3LrVTc1msFx5gX5Rzo74i47qNL2UT5ur3/+WnLiU+j3iUw1GZlLZNwjzrn1Eqp4EyOi+9fIEwA+c2Eu/3TUL/FWnBGe8P0Da+b5Wq3DfgAgXNfTJyAdaUAAAAASUVORK5CYII=")
                  margin-right: 6px
                  position: absolute
                  top: 0
                  left: 0

              &.tasks
                margin-right: auto

          p
            color: #2e2e2e
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 15px
            font-weight: 400

          h6
            margin-bottom: 3px
            color: #1b65c0
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700

        .time-cell
          width: 22%
          min-width: 22%
          margin-right: 2%

          h6
            color: #1b65c0
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700

          .time
            color: #000000
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700

    .table-header
      width: 100%
      height: 38px
      background-color: #dddddd
      display: flex
      align-items: center
      padding: 0 18px

      > span
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700

        &:first-child
          width: 22%
          min-width: 22%
          margin-right: 2%

  h5
    margin-bottom: 20px
    color: #2e2e2e
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 24px
    font-weight: 700
    line-height: 24px

  @media (max-width: 1087px)
    .plan-table
      .fields
        .field
          flex-wrap: wrap

          .actions-cell
            width: 100%
            padding-left: 24%
            padding-top: 0

          .desc-cell
            margin-right: 0
            width: 76%
            padding-bottom: 18px

            .test-results
              flex-wrap: wrap

              span
                &.fail,
                &.done
                  width: 100%
                  margin-top: 10px
                  margin-right: 0

                &.tasks
                  margin-bottom: 5px
                  width: 100%
                  margin-right: 0
  @media (max-width: 768px)
    h5
      font-size: 21px

    .actions
      flex-direction: column
      justify-content: flex-start
      align-items: flex-end
      .button
        &:not(:last-child)
          margin-right: 0
          margin-bottom: 20px
    .plan-table
      padding: 10px

      .fields
        .field
          flex-direction: column
          flex-wrap: nowrap
          padding: 20px

          .time-cell
            width: 100%
            padding: 0
            margin-bottom: 20px

          .desc-cell
            width: 100%
            padding: 0
            margin-bottom: 20px

          .actions-cell
            width: 100%
            padding: 0

            .action-btn
              margin: 0 auto
</style>